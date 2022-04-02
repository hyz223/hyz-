import {INCREMENT, DECREMENT} from './constants.js'

export function createIncrementAction(value){
  return {
    type: INCREMENT,
    data: value
  }
}
export function createDecrementAction(value){
  return {
    type: DECREMENT,
    data: value
  }
}