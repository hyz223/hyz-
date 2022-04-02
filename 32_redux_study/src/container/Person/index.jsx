import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';
import { v4 as uuidv4 } from 'uuid';
import { isNotEmpty } from '../../common/common'

class Person extends Component {
  state = {
    id: '',
    name: '',
    age: ''
  }
  render() {
    return (
      <div>
        <h3>我是Person组件</h3>
        <span>我是从Count组件中获取到的和：{this.props.sum}</span><br />
        <input type="text" placeholder="姓名" onChange={this.save('name')} value={this.state.name} />
        <input type="text" placeholder="年龄" onChange={this.save('age')} value={this.state.age} />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map(item => {
              return <li key={item.id}>姓名：{item.name}，年龄：{item.age}</li>
            })
          }
        </ul>
      </div>
    );
  }
  save = (type) => {
    return (event) => {
      this.setState({ [type]: event.target.value });
    }
  }
  addPerson = () => {
    this.setState({ id: uuidv4() })
    const { name, age } = this.state;
    if (isNotEmpty(name) && isNotEmpty(age)) {
      this.props.createAddPersonAction(this.state);
      this.setState({name: '', age: ''})
    }else{
      alert('懂我意思吧？');
    }
  }
}

const mapStateToProps = state => {
  const { sum, persons } = state;
  return {
    sum, persons
  }
};
const mapDispatchToProps = {
  createAddPersonAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);