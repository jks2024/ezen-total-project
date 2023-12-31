import styled, { css } from "styled-components";

export const Input = styled.input`
  margin: 0 30px;
  width: 100%;
  height: auto;
  line-height: normal;
  padding: 1em;
  border: 1px solid #999;
  border-radius: 18px;
  outline-style: none;
`;
export const Button = styled.button`
  margin: 100px 30px 0;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  color: white;
  background-color: #999;
  border-radius: 18px;
  border: orange;
  ${(props) =>
    props.enabled &&
    css`
      background-color: orange;
    `};
  &:active {
    border: #999;
    background-color: #999;
  }
`;

export const Container = styled.div`
  display: flex; // 1차원, 반응형 웹 만들 때 사용, 기본 값을 가로 배치
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  margin: auto;

  .success {
    color: royalblue;
  }
  .error {
    color: red;
  }
  .footer {
    display: flex;
    position: absolute;
    background-color: #ccc;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    color: #222;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
  }
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  &.sign {
    font-size: 30px;
    margin-top: 100px;
    margin-bottom: 40px;
    justify-content: center;
  }
  &.item1 {
    margin-top: 100px;
    margin-bottom: 40px;
    justify-content: center;
  }
  &.item2 {
    margin: 10px;
  }
  &.item3 {
    margin-top: 10px 40px 0;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
  }
  &.hint {
    margin-top: -5px;
    margin-bottom: 10px;
    margin-right: 40px;
    justify-content: right;
    font-size: 12px;
    color: #999;
  }
  &.signup {
    justify-content: right;
    color: orange;
    font-weight: 700;
    margin-top: 10px;
    margin-right: 40px;
    font-size: 14px;
    .link_style {
      color: orange;
      text-decoration: none;
    }
  }
`;
