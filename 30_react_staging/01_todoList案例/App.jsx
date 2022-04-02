import React from 'react'
import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';
import './App.css';

export default class App extends React.Component {
  state = {
    todoList: [
      { id: '1', name: '抽烟', done: true },
      { id: '2', name: '喝酒', done: false },
      { id: '3', name: '烫头', done: true }
    ]
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-warp">
          <Header addTodo={this.addTodo} />
          <List todoList={this.state.todoList} deleteTodo={this.deleteTodo} changeDoneStatus={this.changeDoneStatus} />
          <Footer todoList={this.state.todoList} clearChecked={this.clearChecked} allChecked={this.allChecked} />
        </div>

      </div>
    )
  }
  addTodo = (obj) => {
    let { todoList } = this.state;
    this.setState({ todoList: [obj, ...todoList] });
  }
  deleteTodo = (id) => {
    const { todoList } = this.state;
    const newList = todoList.filter(item => {
      return item.id !== id;
    })
    this.setState({ todoList: newList });
  }
  changeDoneStatus = (id, flag) => {
    const { todoList } = this.state;
    const newList = todoList.map(item => {
      if (item.id === id) {
        item.done = flag;
      }
      return item;
    })
    this.setState({ todoList: newList })
  }
  clearChecked = () => {
    if (window.confirm('Are You Sure???')) {
      const { todoList } = this.state;
      const newList = todoList.filter(item => !item.done)
      this.setState({ todoList: newList });
    }
  }
  allChecked = (flag) => {
    const { todoList } = this.state;
    // forEach会改变原数组？
    todoList.forEach(item => item.done = flag)
    this.setState({ todoList });
  }
}
