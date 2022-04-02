import React, { Component } from 'react';

class Count extends Component {
  state = {
    sum: 0
  }
  render() {
    return (
      <div>
        <h3>当前求和的值为：{this.state.sum}</h3>
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
    const { sum } = this.state;
    const { value: num } = this.numNode;
    this.setState({ sum: sum + num * 1 })
  }
  decrement = () => {
    const { sum } = this.state;
    const { value: num } = this.numNode;
    this.setState({ sum: sum - num * 1 })
  }
  incrementIfObb = () => {
    const { sum } = this.state;
    const { value: num } = this.numNode;
    if (sum % 2 !== 0) {
      this.setState({ sum: sum + num * 1 })
    }
  }
  incrementByAsync = () => {
    const { sum } = this.state;
    const { value: num } = this.numNode;
    setTimeout(() => {
      this.setState({ sum: sum + num * 1 })
    }, 300);

  }
}

export default Count;