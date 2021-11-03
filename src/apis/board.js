import axios from "axios";
//페이지 넘버가 넘어오지않으면 기본적으로 1을 가짐 pageNo=1
// 쿼리스트링 방식은 { params: { pageNo } }); 이렇게 사용함
function getBoardList(pageNo = 1) {
  return axios.get("/board/list", { params: { pageNo } });
}

// multipartFormData 무조건 post방식!
function createBoard(multipartFormData) {
  return axios.post("/board/create", multipartFormData);
}

function readBoard(bno, hit){
  return axios.get(`/board/${bno}`, { params: { hit } });
}

function updateBoard(multipartFormData) {
  return axios.post("/board/update", multipartFormData);
}

function deleteBoard(bno){
  return axios.delete(`/board/${bno}`);
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
};
