// Count容器组件，用于连接Count的UI和redux

// 引入Count UI
import CountUI from '../../component/Count'
// 引入connect，用于连接UI和redux，生成容器组件
import { connect } from 'react-redux'
// 引入action.js
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action';

/**
 * connect()里面可以传2个函数：mapStateToProps(state)和mapDispatchToProps(dispatch)
 * 分别用来传redux中的状态和操作状态的方法
 */
function mapStateToProps(state) {
  return {
    sum: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    map_increment: (value) => {
      dispatch(createIncrementAction(value));
    },
    map_decrement: (value) => {
      dispatch(createDecrementAction(value));
    },
    map_incrementAsync: (value, time) => {
      dispatch(createIncrementAsyncAction(value, time));
    }
  }
}

// 连接UI和redux，生成容器组件
const countContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)
// 暴露容器组件
export default countContainer;