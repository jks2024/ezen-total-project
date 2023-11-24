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
};

export default AxiosApi;
