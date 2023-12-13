import { Axios } from "axios";
import { useState, useEffect } from "react";
import AxiosApi from "../api/AxoisApi";
import styled from "styled-components";
import MovieCardView from "../component/MovieCardView";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #eee;
  gap: 8px;
  justify-content: start;
  margin: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const PageButton = styled.button`
  border: 1px solid #ddd;
  padding: 5px;
  width: 28px;
  margin: 0 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkgray;
  }

  &:focus {
    outline: none;
    background-color: royalblue;
  }
`;

const Movies = () => {
  const [movies, setMovies] = useState([]); // 영화 데이터 가져오기
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const [totalPage, setTotalPage] = useState(0); // 총 페이지 수

  // 총 페이지 수 계산하기
  useEffect(() => {
    const totalPage = async () => {
      try {
        const res = await AxiosApi.moviePage(0, 10);
        setTotalPage(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    totalPage();
  }, []);

  useEffect(() => {
    const movieList = async () => {
      try {
        const res = await AxiosApi.moviePageList(currentPage, 10);
        setMovies(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    movieList();
  }, [currentPage]);

  // 페이지 이동
  const handlePageChange = (number) => {
    setCurrentPage(number - 1);
  };

  const renderPagination = () => {
    return (
      <PaginationContainer>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <PageButton key={page} onClick={() => handlePageChange(page)}>
            {page}
          </PageButton>
        ))}
      </PaginationContainer>
    );
  };
  return (
    <>
      <CardContainer>
        {movies.map((movie) => (
          <MovieCardView
            key={movie.rank}
            rank={movie.rank}
            image={movie.image}
            title={movie.title}
            score={movie.score}
            rate={movie.rate}
            reservation={movie.reservation}
            date={movie.date}
          />
        ))}
      </CardContainer>
      {renderPagination()}
    </>
  );
};
export default Movies;
