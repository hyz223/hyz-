import React, { Component } from 'react';
import './index.css';

class index extends Component {
  state = {
    isEnter: false
  }
  render() {
    const { id, name, done } = this.props;
    return (
      <li onMouseMove={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} className={this.state.isEnter ? 'active' : ''}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheckboxChange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: this.state.isEnter ? 'block' : 'none' }} onClick={this.deleteTodo(id)}>删除</button>
      </li>
    );
  }
  handleMouse = (type) => {
    return () => {
      this.setState({ isEnter: type })
    }
  }
  deleteTodo = (id) => {
    return () => {
      if (window.confirm('Are You sure?')) {
        this.props.deleteTodo(id);
      }
    }
  }
  handleCheckboxChange = (id) => {
    return (event) => {
      this.props.changeDoneStatus(id, event.target.checked);
    }
  }
}

export default index;