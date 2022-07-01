//  더보기 버튼이 포함된 리스트 컴포넌트입니다.
import ListItem from "./listItem";
import React from "react";

const moreButton = () => {
  return (
    <div>
      <ListItem />
      <button>더보기</button>
    </div>
  );
};

export default moreButton;
