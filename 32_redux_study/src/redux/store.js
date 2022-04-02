import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import countReducer from './reducers/count';
import personReducer from './reducers/person';

const allReducer = combineReducers({
  sum: countReducer,
  persons: personReducer
})

// 添加applyMiddleware，开启异步Action
export default createStore(allReducer, applyMiddleware(thunk));