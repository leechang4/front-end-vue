<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      <span class="title"> Exam02View </span>
    </div>
    <div class="card-body">
      <sub-a-component class="mr-2" />
      <!-- 프로그램 방식 화면 이동 -->
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" v-on:click="goUrl()">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl">/menu01/exam01view</button>
      <button class="btn btn-info btn-sm mr-2" @click="goUrl()">/menu01/exam01view</button>
    </div>
  </div>
</template>

<script>
import SubAComponent from "./SubAComponent.vue";
export default {
  // 컴포넌트의 대표이름(devtools에 나오는 이름)
  name: "Exam02View",
  // 추가하고 싶은 컴포넌트를 등록 얘는 있어도 되고 없어도 됌
  components: { SubAComponent },
  // 컴포넌트에서 이용하는 데이터 정의
  data: function() {
    return {};
  },
  // 컴포넌트 메서드 정의
  methods: {
    goUrl() {
      this.$router.push("/menu01/exam01view");
      //현재 URL과 동일한 URL로 화면 이동을 할 경우 예외가 발생하므로 예외 처리 코드 필요
      // this.$router.push("/menu01/exam02view").catch(() => {}); //라우터를 참조함 // push는 url // 실패가 되면 catch로 간다.

      // this.$router.push({path:"/menu01/exam02view"});
      // this.$router.push({name:"menu01_exam02view"});
    },
  },
};
</script>

<!-- 컴포넌트 스타일 정의 -->
<style scoped></style>
