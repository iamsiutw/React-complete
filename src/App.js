import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      { name: "Messie", age: 38 },
      { name: "Wang", age: 36 },
      { name: "Nadal", age: 33 }
    ],
    otherState: "something"
  }

  switchNameHandler = () => {
    // console.log('click');
    // state和setState只有component才有
    this.setState( {
      person: [
        { name: "Brady", age: 38 },
        { name: "Wang", age: 36 },
        { name: "Nadal", age: 39 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>Job: Professional baseball player</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
  }
}

export default App;
