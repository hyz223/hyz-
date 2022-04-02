import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action';
import { connect } from 'react-redux';

class Count extends Component {
  render() {
    console.log('Count props-->', this.props);
    return (
      <div>
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

const mapStateToProps = state => ({ sum: state });
const mapDispatchToProps = { createIncrementAction, createDecrementAction, createIncrementAsyncAction }

export default connect(mapStateToProps, mapDispatchToProps)(Count);