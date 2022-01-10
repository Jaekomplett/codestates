import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

// 리듀서
// state를 마음대로 보관할 수 있다. 
// 여기서 state의 기본이 되는 data는 initialState 파일에서 받아온다.

const itemReducer = (state = initialState, action) => {
  // console.log(state);
  
  // state 변경하는 부분
  switch (action.type) {
    // action은 객체다.
    case ADD_TO_CART:
      //TODO
      // 객체를 입력 받으면 뒤의 값을 계속 중첩해서 받는다.
      return Object.assign({}, state, {
        cartItems: [...state.cartItems, action.payload]
      })
    case REMOVE_FROM_CART:
      //TODO
      return Object.assign({}, state, {
        cartItems: state.cartItems.filter(el => el.itemId !== action.payload.itemId)
      })
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex(el => el.itemId === action.payload.itemId)
      //TODO
      return Object.assign({}, state, {
        cartItems: [...state.cartItems.slice(0, idx), action.payload,
        ...state.cartItems.slice(idx + 1)]
      })
    default:
      return state; // 아무것도 실행되지 않으면 기본으로 이것이 실행
  }
}

export default itemReducer;