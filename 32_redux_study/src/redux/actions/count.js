import { INCREMENT, DECREMENT } from '../constants.js'
import store from '../store'

export function createIncrementAction(value) {
  return {
    type: INCREMENT,
    data: value
  }
}
export function createDecrementAction(value) {
  return {
    type: DECREMENT,
    data: value
  }
}
export function createIncrementAsyncAction(value, time) {
  return () => {
    setTimeout(() => {
      store.dispatch({ type: INCREMENT, data: value })
    }, time)
  }
}