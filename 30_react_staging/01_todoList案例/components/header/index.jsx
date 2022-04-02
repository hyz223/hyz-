import React, { Component } from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="输入，回车确认" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim() === '') return alert('不能为空');
    const todoObj = {
      id: uuidv4(),
      name: event.target.value,
      done: false
    }
    this.props.addTodo(todoObj);
    event.target.value = '';
  }
}

export default Header;