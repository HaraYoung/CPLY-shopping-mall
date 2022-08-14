import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList, putItem } from "../../slices/SY/CartSlice";
import { reducer } from "../../components/NumOption";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../components/Spinner";
import ErrorView from "../../components/ErrorView";
import { type } from "@testing-library/user-event/dist/type";


const Test = memo(({ step = 1, min = 0, max = 50 }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.CartSlice);
  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);
  const initialState = { count: 0 };
  const [state, amount] = React.useReducer(reducer, initialState);

    //상품 수량 변동을 관리할 상태값
    const [goodsCount, setGoodsCount] = React.useState({
      //상품의 수량
      goodsQty: [],
      //상품의 카운트값
      count: [],
      //합친값
      qtyCut: [],
    });
    const cut= React.useRef({});

  return (
    <>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
        ) : data && (
          <>
      {data.item.map((item, index) => {
        // goodsCount.goodsQty.push(item.qty)
        // goodsCount.count.push(0)
        console.log(item)
        return (
          <div className="numOptionArea" key={item.id} ref={(e=>{cut.current[index]=e})}>
            <FontAwesomeIcon
              className="numOption"
              icon={faMinus}
              onClick={() => {
                //use
                amount({ type: "DECREMENT", step, min });
              }}
            />
            <span>{state.count}</span>
            <FontAwesomeIcon
              className="numOption"
              icon={faPlus}
              onClick={() => amount({ type: "INCREMENT", step, max })}
            />
            <div>{item.title}</div>
            
            <div>{index}</div>
          </div>
        );
      }
      )
    }
    </>
    )}
    </>
);
});
export default Test;
