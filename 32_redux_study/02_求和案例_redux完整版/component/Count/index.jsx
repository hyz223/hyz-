import React, { Component } from 'react';
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

class Count extends Component {
  render() {
    return (
      <div>
        <h3>当前求和的值为：{store.getState()}</h3>
        <select ref={c => this.numNode = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfObb}>奇数+</button>&nbsp;
        <button onClick={this.incrementByAsync}>异步+</button>
      </div>
    );
  }
  // increment = () => {
  //   const { value: num } = this.numNode;
  //   // 准备一个action对象
  //   const action = {
  //     type: 'increment',
  //     data: num * 1
  //   }
  //   // 分发这个action对象
  //   store.dispatch(action);
  // }
  increment = () => {
    const { value: num } = this.numNode;
    // 分发这个action对象
    store.dispatch(createIncrementAction(num * 1));
  }
  decrement = () => {
    const { value: num } = this.numNode;
    store.dispatch(createDecrementAction(num * 1));
  }
  incrementIfObb = () => {
    const { value: num } = this.numNode;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(num * 1));
    }
  }
  incrementByAsync = () => {
    const { value: num } = this.numNode;
    setTimeout(() => {
      store.dispatch(createIncrementAction(num * 1));
    }, 300);

  }
}

export default Count;