import React, { Component } from 'react'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count';
import { connect } from 'react-redux';

class Count extends Component {
  render() {
    // console.log('Count props-->', this.props);
    return (
      <div>
        <h3>我是Count组件</h3>
        <h3>当前求和的值为：{this.props.sum}</h3>
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
        <h5>我接受到的Person组件的数据是：</h5>
        <ul>
          {
            this.props.persons.map(item => {
              return <li key={item.id}>{item.name}----{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
  increment = () => {
    const { value: num } = this.numNode;
    this.props.createIncrementAction(num * 1);
  }
  decrement = () => {
    const { value: num } = this.numNode;
    this.props.createDecrementAction(num * 1);
  }
  incrementIfObb = () => {
    const { value: num } = this.numNode;
    if (this.props.sum % 2 !== 0) {
      this.props.createIncrementAction(num * 1);
    }
  }
  incrementByAsync = () => {
    const { value: num } = this.numNode;
    this.props.createIncrementAsyncAction(num * 1, 500);
  }
}

const mapStateToProps = state => {
  console.log('----->', state);
  return {
    sum: state.sum,
    persons: state.persons
  }
};
const mapDispatchToProps = { createIncrementAction, createDecrementAction, createIncrementAsyncAction }

export default connect(mapStateToProps, mapDispatchToProps)(Count);