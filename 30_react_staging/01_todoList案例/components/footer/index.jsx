import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  state = {
    checked: 0
  }

  render() {
    const { todoList } = this.props;
    const checkedCount = todoList.filter(item => item.done).length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.allChecked} checked={todoList.length === checkedCount && todoList.length > 0} />
        </label>
        <span>
          <span>已完成 {checkedCount}</span> / 全部 {todoList.length}
        </span>
        <button className="btn btn-danger" onClick={this.clearChecked} style={{ display: checkedCount !== 0 ? 'block' : 'none' }}>清除所选</button>
      </div>
    );
  }
  clearChecked = () => {
    this.props.clearChecked();
  }
  allChecked = (event) => {
    this.props.allChecked(event.target.checked)
  }

}

export default Footer;