import axios from "axios";
import { EZEN_DOMAIN } from "../utils/Common";

const AxiosApi = {
  // 로그인
  memberLogin: async (email, pw) => {
    const login = {
      email: email,
      pwd: pw,
    };
    return await axios.post(EZEN_DOMAIN + "/users/login", login);
  },
  // 회원 가입 여부 확인
  memerRegCheck: async (email) => {
    return await axios.get(EZEN_DOMAIN + `/users/check?email=${email}`);
  },
  // 회원 가입
  memberReg: async (email, pwd, name) => {
    const member = {
      email: email,
      pwd: pwd,
      name: name,
    };
    return await axios.post(EZEN_DOMAIN + "/users/new", member);
  },
  // 회원 상세 조회
  memberGetOne: async (email) => {
    return await axios.get(EZEN_DOMAIN + `/users/detail/${email}`);
  },
  // 회원 전제 조회
  memberGet: async () => {
    return await axios.get(EZEN_DOMAIN + `/users/list`);
  },
  // 회원 정보 수정
  memberUpdate: async (email, name, image) => {
    const member = {
      email: email,
      name: name,
      image: image,
    };
    return await axios.put(EZEN_DOMAIN + `/users/modify`, member);
  },
  // 카테고리 조회
  cateList: async () => {
    return await axios.get(EZEN_DOMAIN + `/api/category/list`);
  },
  // 카테고리 만들기
  cateInsert: async (email, category) => {
    const cate = {
      email: email,
      categoryName: category,
    };
    return await axios.post(EZEN_DOMAIN + `/api/category/new`, cate);
  },
  // 카테고리 삭제
  cateDelete: async (categoryId) => {
    console.log(categoryId);
    return await axios.delete(
      EZEN_DOMAIN + `/api/category/delete/${categoryId}`
    );
  },
  // 게시글 조회
  boardList: async () => {
    return await axios.get(EZEN_DOMAIN + "/api/board/list");
  },
  // 게시글 등록
  boardWrite: async (email, title, categoryId, content, img) => {
    const board = {
      email: email,
      title: title,
      categoryId: categoryId,
      content: content,
      img: img,
    };
    return await axios.post(EZEN_DOMAIN + "/api/board/new", board);
  },
  // 게시글 상세 조회
  boardDetail: async (boardId) => {
    return await axios.get(EZEN_DOMAIN + `/api/board/detail/${boardId}`);
  },
  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    return await axios.get(EZEN_DOMAIN + `/api/comment/list/${boardId}`);
  },
  // 댓글 쓰기
  commentWrite: async (email, boardId, content) => {
    const comment = {
      boardId: boardId,
      email: email,
      content: content,
    };
    return await axios.post(EZEN_DOMAIN + `/api/comment/new`, comment);
  },
  // 게시글 삭제
  boardDelete: async (id) => {
    return await axios.delete(EZEN_DOMAIN + `/api/board/delete/${id}`);
  },
};

export default AxiosApi;
