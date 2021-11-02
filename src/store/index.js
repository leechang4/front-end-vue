import Vue from "vue"; //vue 모듈을 가져온다.
import Vuex from "vuex"; //vuex모듈을 가져온다.

import counter from "./counter";

import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex); //vue에서 사용되도록한다.

//Vuex가 가지고 있는 Store객체를 만들어서
//어떤 state를 저장할것이냐
//state는 root상태를 추가한다.
//mutations 는 상태를 변경하는 setter, 동기방식 처리한다.
//actions 는 비동기 처리를 말한다.
//mutation과 actions는 세트다.

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: "",
    authToken: "",
  },
  //루트 상태 값을 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    },
  },
  //루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload) {
      state.authToken = payload;
    },
  },
  //루트 상태값을 변경하는 비동기 메소드 정의(Setter) //네트워크값이 언제 돌아올지 모르니까
  actions: {
    setUserIdByAsync(context, payload) {
      //payload = {userId:xxx, duration:3000}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration); //setTimeout(함수, 지연시간)
      })
        .then(data => {
          console.log(`userId 상태 변경 성공: ${data}`);
        })
        .catch(err => {
          console.log(`userId 상태 변경 실패: ${err}`);
        });
    },
    saveAuth(context, payload) {
      //payload={userId:xxx, authToken:xxx}
      //상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);
      //브라우저 리프레쉬때 다시 로딩하기 위해 세션 스토리지에 저장
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);
      //로그인 성공후에 Axios의 공통 헤더에 Authorization을 추가
      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context, payload) {
      //세션 스토리지에 저장된 내용을 읽어서 "상태" 복원
      //앞에게 false이면 뒤에게 값이 된다.
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      //context.commit("setUserId", (sessionStorage.getItem("userId") !== null)? sessionStorage.getItem("userId"): ""); //이렇게 써도 된다.
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      //authToken이 있을 경우, Axios의 공통 헤더에 Authorization을 추가
      if (context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload) {
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      axiosConfig.removeAuthHeader();
    },
  },
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    counter,
  },
});
