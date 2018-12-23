import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>My First React Application</h1>
      <Ninjas name="Ismail" age="70" belt="Yellow"/>
      <Ninjas name="Ishaq" age="50" belt="Blue"/>
      <Ninjas name="Yakson" age="20" belt="Black"/>
      </div>
    );
  }
}

export default App;
