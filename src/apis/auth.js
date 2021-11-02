import axios from "axios";

function join(user) {
  //user = {id:xxx , name:xxx, password:xxx, role:xxx, email: xxx} // 리퀘스트바디에 제이슨을 포함한 방식으로 보냄
  return axios.post("/member/join2", {
    mid: user.id,
    mname: user.nmae,
    mpassword: user.password,
    mrole: user.role,
    memail: user.email,
  });
}

function login(user) {
  //user = {id:xxx , name:xxx, password:xxx} // 쿼리스트링 방식
  return axios.post("/member/login1", `mid=${user.id}&mpassword=${user.password}`);
}

export default {
  join,
  login,
};
