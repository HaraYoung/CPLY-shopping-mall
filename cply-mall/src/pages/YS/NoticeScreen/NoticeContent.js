import React from "react";
import setNotice from "./NoticeAPI";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
const NoticeContent = () => {
  const { id } = useParams();
  const notice = setNotice.find((p) => p.id === id);

  return (
    <div>
      <div>{notice.content}</div>

      <div>
        <Link to="/">목록보기</Link>
      </div>
    </div>
  );
};

export default NoticeContent;
