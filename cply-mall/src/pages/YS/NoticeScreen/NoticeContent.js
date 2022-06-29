import React from "react";
import setNotice from "./NoticeAPI";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
const NoticeContent = () => {
  const { id } = useParams();
  const notice = setNotice.find((p) => p.id === id);

  return (
    <Container>
      <TitleWrap>{notice.title}</TitleWrap>
      <ContentWrap>{notice.content}</ContentWrap>

      <ButtonWrap>
        <Link to="/">목록보기</Link>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div``;

const TitleWrap = styled.div`
  padding: 17px 0 19px;
`;

const ContentWrap = styled.div`
  padding: 20px 20px;
  background-color: rgba(0, 0, 0, 0.04);
`;

const ButtonWrap = styled.div`
  text-align: center;
  padding: 25px 35px;
  a {
    text-decoration: none;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.8);
    border: 1px solid #d3d3d3;
    border-radius: 12px;
    padding: 10px 20px;
  }
`;

export default NoticeContent;
