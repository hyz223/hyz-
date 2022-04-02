import { INCREMENT, DECREMENT } from '../constants.js'

// reducer可以：初始化状态，加工状态
const initState = 0;
export default function countReducer(preState = initState, action) {
  // console.log('countRedecer---->', preState, action);

  // 从action对象中获取type、data
  const { type, data } = action;

  // 根据type决定如何操作状态
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}