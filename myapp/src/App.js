import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {

  state = {
    ninjas:[
      {name: 'Ismodon', age: 34, belt: 'black', id:1},
      {name: 'Yaxson', age:56, belt: 'purple', id:2},
      {name: 'Katty', age:38, belt: 'black', id:3}
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>My First React Application</h1>
      <Ninjas ninjas={this.state.ninjas}/>
      
      </div>
    );
  }
}

export default App;
