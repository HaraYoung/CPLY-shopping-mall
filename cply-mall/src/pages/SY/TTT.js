import React, { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getList } from "../../slices/SY/CartSlice";

import { useQueryString } from "../../hooks/useQueryString";

import ErrorView from "../../components/ErrorView";

import useMountedRef from "../../hooks/useMounterRef";




const TTT = memo(() => {
  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CartSlice);

  const { query } = useQueryString({ query: "" });

      //드롭다운 선택 변경시 호출되는 이벤트
    //이 컴포넌트가 화면에 마운트 되었는지 확인하기 위한 hook
    const mountedRef= useMountedRef();

  /** 최초 마운트 혹은 QueryString이 변경될 때 마다 hook -> 리덕스를 통해 목록을 조회한다. */
  React.useEffect(() => {
    if (mountedRef.current){    //false=최초 등장시, true=최초 등장 이후
    dispatch(
      getList({
        query: query,
      })
    );
  }
  }, [mountedRef, dispatch, query]);

  console.log(data);

  return (
    <div>
      {error ? (<ErrorView error={error} />
      ) : data && (
            {data}
          )}
    </div>
  );
});

export default TTT;
