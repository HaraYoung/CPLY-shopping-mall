import React, { memo, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList, putItem } from "../../slices/SY/CartSlice";
import { reducer } from "../../components/NumOption";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import { type } from "@testing-library/user-event/dist/type";

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CartSlice);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  const [state, setState] = React.useState({
    id: null,
    qty: null,
  });

  return (
    <>
      <Spinner visible={loading} />
      {error ? (

        <ErrorView error={error} />
      ) : data && (
      <ul>
        {data.item.map((v, i) => {
          const value = [];
          //데이터의 id와 qty를 저장
          //bar(v.id, v.qty);

          //data의 id와 변경된 수량을 담은 json의 id가 같다면
          // 데이터의 qty를 value.qty로 변경 후
          //put으로 DB 데이터 수정
          // const foo = () => {
          //   if (v.id === value.id) {
          //     setState({ qty: value.qty });
          //     //dispatch(putItem({ ...v, qty: v.qty }));
          //   }
          // };

          //버튼이 클릭이 되었을 때 push하지만 id가 같은게 없다면 새로 push
          //id가 같은게 있다면 그 id의 qty를 변경,
          //만약 변경된게 없다면 그대로 리턴
          return (
            <div key={v.id}>
              <div>{v.title}</div>
              <FontAwesomeIcon className="numOption" icon={faMinus}/>
              <div>
                {v.qty}
              </div>
              <FontAwesomeIcon className="numOption" icon={faPlus}/>
            </div>
          );
        })}
      </ul>
      )}
    </>
  );
});
export default Test;
