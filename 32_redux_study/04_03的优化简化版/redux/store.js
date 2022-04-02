import { createStore, applyMiddleware } from 'redux';
import countReducer from './count_reducer';
import thunk from 'redux-thunk';

// 添加applyMiddleware，开启异步Action
const store = createStore(countReducer, applyMiddleware(thunk));

export default store;