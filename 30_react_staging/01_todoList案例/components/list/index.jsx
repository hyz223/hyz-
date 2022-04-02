import React, { Component } from 'react';
import './index.css';
import Item from '../item';

class List extends Component {
  render() {
    const { todoList, deleteTodo, changeDoneStatus } = this.props;
    return (
      <ul className="todo-main">
        {
          todoList.map(item => <Item key={item.id} {...item} deleteTodo={deleteTodo} changeDoneStatus={changeDoneStatus} />)
        }
      </ul>
    );
  }
}

export default List;