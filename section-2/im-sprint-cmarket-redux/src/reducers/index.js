import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import notificationReducer from './notificationReducer';

const rootReducer = combineReducers({
  // 불러온 두 파일은 state를 변경하는 함수를 갖고 있는 파일이다.
  // 이 state 변경을 컴포넌트에서 요청하려면 
  // dispatch 함수를 사용해야 한다.
  itemReducer,
  notificationReducer
});

export default rootReducer;