import { createSlice } from "@reduxjs/toolkit";

//Slice정의 (Action함수 + Reducer의 개념)
const orderStaterSlice = createSlice({
  name: "orderState",
  //이 모듈이 관리하고자하는 상태값들을 명시
  initialState: {
    // number: 0,
    // color: '#000'
    stateName: [
      "order",
      "delivery",
      "Dcomplete",
      "soldDecide",
      "Exchange",
      "Refund",
    ],
  },
  //내부 action 및 동기 action
  /*상태값을 갱신하기 위한 함수들을 구현
    컴포넌트에서 이 함수들을 호출할때 전달되는 파라미터는 action.payload로 전달됨
    initialState와 동일한 구조의 JSON을 리턴 */
  reducers: {
    //ex)plus(5) =>5라는 값이 action객체안의 하위값 action.payload으로 5가 전달됨
    plus: (state, action) => {
      //state= 기존의 상태값
      //새롭게 전달된 파라미터를 활용해 기존에 저장되어있던 상태값을 변화를 준후 그결과를 새롭게 리턴해줌
      const numberValue = state.number + action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2f77eb";
      } else if (numberValue < 0) {
        colorValue = "#f60";
      }
      return { number: numberValue, color: colorValue };
    },
    orderName: (state, action) => {
      //파라미터로 받은 숫자에 따라 출력하는 문자열이 다름..
      // eslint-disable-next-line default-case
      // switch (action.payload) {
      //   case 1:
      //     return nameValue[0];
      //   case 2:
      //     return nameValue[1];
      //   case 3:
      //     return nameValue[2];
      //   case 4:
      //     return nameValue[3];
      //   case 5:
      //     return nameValue[4];
      //   case 6:
      //     return nameValue[5];
      // }
      if( action.payload === 1){
        return state[0]
      }
      //return {stateName: nameValue}
    },

    //   const numberValue = state.number - action.payload;
    //   let colorValue = "#000";

    //   if (numberValue > 0) {
    //     colorValue = "#2f77eb";
    //   } else if (numberValue < 0) {
    //     colorValue = "#f60";
    //   }
    //   return { number: numberValue, color: colorValue };
    //리턴결과가 다시 상태값으로 들어감- 결과 json이 상태값과 동일한 구조여야함
  },
});

//액션함수들 내보내기
export const { orderName } = orderStaterSlice.actions;

//리듀서 객체 내보내기- 위에서 정의할땐 reducers이지만 내보낼때는 reducer임.다른 객체임
export default orderStaterSlice.reducer; //createSlice에서 자동으로 내장해주는 내장객체- 상태값들이 포함이 되어있음
