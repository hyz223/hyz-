import React, { Component } from 'react';
import Count from './container/Count';       
import Person from './container/Person';       

class App extends Component {
  render() {
    return (
      <div>
        <Count></Count>
        <Person></Person>
      </div>
    );
  }
}

export default App;