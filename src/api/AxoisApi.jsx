import axios from "axios";
import Common from "../utils/Common";

const AxiosApi = {
  // 로그인
  memberLogin: async (email, pw) => {
    console.log("로그인 : ", email, pw);
    const login = {
      email: email,
      password: pw,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/auth/login", login);
  },
  //회원 전체 조회
  memberGet: async () => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + `/users/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 회원 조회
  memberGetOne: async (email) => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + `/users/detail/${email}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 개인 정보 조회
  memberGetInfo: async () => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + `/users/info/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },

  // 회원 가입
  memberReg: async (email, pwd, name) => {
    const member = {
      email: email,
      password: pwd,
      name: name,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/auth/signup", member);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async (email) => {
    console.log("가입 가능 여부 확인 : ", email);
    return await axios.get(Common.EZEN_DOMAIN + `/auth/exists/${email}`);
  },
  // 회원 정보 수정
  memberUpdate: async (email, name, image) => {
    const accessToken = Common.getAccessToken();
    console.log("회원 정보 수정 : ", email, name, image);
    const member = {
      email: email,
      name: name,
      image: image,
    };
    return await axios.put(Common.EZEN_DOMAIN + `/users/modify`, member, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },

  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/user/delete", del);
  },
  // 게시글 조회
  boardList: async () => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + "/api/board/list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 게시글 상세 조회
  boardDetail: async (boardId) => {
    const accessToken = Common.getAccessToken();
    return await axios.get(
      Common.EZEN_DOMAIN + `/api/board/detail/${boardId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
  // 게시글 쓰기
  boardWrite: async (title, categoryId, content, img) => {
    const accessToken = Common.getAccessToken();
    const board = {
      title: title,
      categoryId: categoryId,
      content: content,
      img: img,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/api/board/new", board, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 게시글 삭제
  boardDelete: async (boardId) => {
    const accessToken = Common.getAccessToken();
    return await axios.delete(
      Common.EZEN_DOMAIN + `/api/board/delete/${boardId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    const accessToken = Common.getAccessToken();
    return await axios.get(
      Common.EZEN_DOMAIN + `/api/comment/list/${boardId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
  // 댓글 쓰기
  commentWrite: async (boardId, content) => {
    const accessToken = Common.getAccessToken();
    const comment = {
      boardId: boardId,
      content: content,
    };
    return await axios.post(Common.EZEN_DOMAIN + `/api/comment/new`, comment, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 카테고리 조회
  cateList: async () => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + `/api/category/list`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 카테고리 쓰기
  cateInsert: async (category) => {
    const accessToken = Common.getAccessToken();
    const cate = {
      categoryName: category,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/api/category/new", cate, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 카테고리 삭제
  cateDelete: async (categoryId) => {
    const accessToken = Common.getAccessToken();
    return await axios.delete(
      Common.EZEN_DOMAIN + `/api/category/delete/${categoryId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
  // 카테고리 수정
  cateUpdate: async (todoId) => {
    const accessToken = Common.getAccessToken();
    return await axios.put(Common.EZEN_DOMAIN + `/api/todo/${todoId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 영화 목록 조회
  movieList: async () => {
    return await axios.get(Common.EZEN_DOMAIN + "/movies/list");
  },
  // 영화 페이지 수 조회
  moviePage: async (page, size) => {
    return await axios.get(
      Common.EZEN_DOMAIN + `/movies/list/count?page=${page}&size=${size}`
    );
  },
  // 영화 페이지네이션 조회
  moviePageList: async (page, size) => {
    return await axios.get(
      Common.EZEN_DOMAIN + `/movies/list/page?page=${page}&size=${size}`
    );
  },
  // 채팅방 목록 보기
  chatList: async () => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + "/chat/list", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 채팅방 정보 보기
  chatDetail: async (roomId) => {
    const accessToken = Common.getAccessToken();
    return await axios.get(Common.EZEN_DOMAIN + `/chat/room/${roomId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 채팅방 생성
  chatCreate: async (name) => {
    const accessToken = Common.getAccessToken();
    const chat = {
      name: name,
    };
    return await axios.post(Common.EZEN_DOMAIN + "/chat/new", chat, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  // 파이썬을 연결해 성별 정보 가져오기
  genderChart: async (region) => {
    return await axios.get(`http://127.0.0.1:5000/api/gender/${region}`);
  },
};
export default AxiosApi;
