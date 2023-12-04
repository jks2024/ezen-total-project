import AxiosApi from "../../api/AxoisApi";
import { useState, useEffect } from "react";
import CateTemplate from "./CateTemplate";
import CateInsert from "./CateInsert";
import CateList from "./CateList";

const Category = () => {
  const [category, setCategory] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const cateList = async () => {
      // 카테고리 목록 보기
      try {
        const resp = await AxiosApi.cateList();
        if (resp.status === 200) setCategory(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    cateList();
  }, []);
  const onInsert = async (text) => {
    // 카테고리 등록
    const resp = await AxiosApi.cateInsert(email, text); // 등록
    if (resp.data) {
      const resp = await AxiosApi.cateList(); // 등록 이후 조회
      setCategory(resp.data);
    }
  };
  const onRemove = async (id) => {
    // 카테고리 삭제
    const resp = await AxiosApi.cateDelete(id);
    if (resp.data) {
      const resp = await AxiosApi.cateList(); // 삭제 이후 조회
      setCategory(resp.data);
    }
  };
  return (
    <CateTemplate>
      <CateInsert onInsert={onInsert} />
      <CateList cates={category} onRemove={onRemove} />
    </CateTemplate>
  );
};
export default Category;
