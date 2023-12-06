import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxoisApi";
import styled from "styled-components";
import Common from "../../utils/Common";

const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: #666;
  line-height: 1.5;
`;

const CommentForm = styled.form`
  margin-top: 20px;
  clear: left;
`;

const BoardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 10px;
  float: left;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const CommentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const CommentContent = styled.p`
  color: #444;
  font-size: 1em;
  margin: 0;
  padding: 0;
`;
const CommentEmail = styled.p`
  display: flex;
  justify-content: space-between;
  color: #555;
  font-style: italic;
  font-size: 13px;
  margin: 0;
  padding: 0;
`;

const BoardDate = styled.p`
  color: #777;
  font-size: 0.8em;
  text-align: right;
`;

const BoardDetail = () => {
  const { id } = useParams(); // 라우터 이동시 id를 넘겨 받음
  const [board, setBoard] = useState(""); // 게시글 보기
  const [comments, setComments] = useState(""); // 댓글 목록
  const [inputComment, setInputCommnet] = useState(""); // 댓글 쓰기
  const [comAddFlag, setComAddFlag] = useState(false); // 댓글 추가 성공 여부
  const [showComments, setShowCommnets] = useState(false); // 토글로 댓글 목록 보기 여부

  const toggleComments = () => {
    setShowCommnets(!showComments); // 댓글 보기 토글
  };

  return (
    <Container>
      <BoardImage
        src={board.img ? board.img : "http://via.palceholder.com/160"}
        alt="board"
      />
    </Container>
  );
};
export default BoardDetail;
