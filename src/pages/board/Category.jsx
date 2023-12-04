import AxiosApi from "../../api/AxoisApi";
import { useState, useEffect } from "react";

const Category = () => {
  const [category, setCategory] = useState([]);
  const email = localStorage.getItem("email");

  useEffect(() => {
    const cateList = async () => {
      try {
        const resp = await AxiosApi.cateList();
        if (resp.status === 200) setCategory(resp.data);
      } catch (e) {
        console.log(e);
      }
      cateList();
    };
  }, []);
  const onInsert = async (text) => {
    const resp = await AxiosApi.cateInsert(email, text); // 등록
    if (resp.data) {
      const resp = await AxiosApi.cateList(); // 등록 이후 조회
      setCategory(resp.data);
    }
  };
  const onRemove = async (id) => {
    const resp = await AxiosApi.cateDelete(id);
    if (resp.data) {
      const resp = await AxiosApi.cateList(); // 삭제 이후 조회
      setCategory(resp.data);
    }
  };
};
