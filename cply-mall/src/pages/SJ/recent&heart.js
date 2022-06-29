import React from "react";
import styled from "styled-components";

// 싱태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from "react-redux";

// Slice에 정의된 액션함수들 참조
import {  } from "../slices/";

const  = () => {
  // 컴포넌트가 마운트 될 떄 콘솔의 모든내용을 삭제함 (출력결과가 복잡해 지는 것을 방지)
  React.useEffect(() => console.clear(), []);

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { data, loading, error } = useSelector((state) => state.);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
    dispatch();
  }, [dispatch]);
  return (
    <div>
    
    </div>
  );
};

export default React.memo();
