// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_QUANTITY = "SET_QUANTITY";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

// actions creator functions
export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      quantity: 1,
      itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    //TODO
    // type이 항상 필수로 담긴다.
    type: REMOVE_FROM_CART,
    payload: {
      itemId
    }
  }
}
export const setQuantity = (itemId, quantity) => {
  return {
    type: SET_QUANTITY,
    payload: {
      itemId,
      quantity
    }
  }
}
// 비동기 액션 처리하기 
// store.js의 미들웨어 thunk를 이용해서 
// 액션을 구현한 후, dispatch를 이용해 다른 동기 액션을 호출합니다.
export const notify = (message, dismissTime = 5000) => dispatch => {
  const uuid = Math.random()
  dispatch(enqueueNotification(message, dismissTime, uuid))
  setTimeout(() => {
    dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
    type: ENQUEUE_NOTIFICATION,
    payload: {
      message,
      dismissTime,
      uuid
    }
  }
}

export const dequeueNotification = () => {
  return {
    type: DEQUEUE_NOTIFICATION
  }
}