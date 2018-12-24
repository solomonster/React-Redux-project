import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {

  state = {
    ninjas:[
      {name: 'Ismodon', age: 34, belt: 'black', id:1},
      {name: 'Yaxson', age:56, belt: 'purple', id:2},
      {name: 'Katty', age:38, belt: 'black', id:3}
    ]
  }
  addNinja = (ninja)=> {
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja];
    this.setState({
      ninjas:ninjas
    });
  }
  deleteNinja = (id)=> {
    let ninjas=this.state.ninjas.filter(ninja=>{
      return ninja.id !==id
    });

    this.setState({
      ninjas:ninjas
    });
  }
  render() {
    return (
      <div className="App">
      <h1>My First React Application</h1>
      <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
      <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
