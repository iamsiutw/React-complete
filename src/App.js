import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "Messie", age: 38 },
      { name: "Wang", age: 36 },
      { name: "Nadal", age: 33 }
    ],
    otherState: "something",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('click');
    // state和setState只有component才有
    this.setState({
      person: [
        { name: newName, age: 38 },
        { name: "Wang", age: 36 },
        { name: "Nadal", age: 39 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      person: [
        { name: "Messie", age: 38 },
        { name: event.target.value, age: 36 },
        { name: "Nadal", age: 33 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };

  render() {
    // inline css
    const style = {
      backgroundColor: "white",
      font: "inheirt",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle persons
        </button>
        {/* 不建議此寫法 因效能差 */}
        {
        this.state.showPersons === true ?
        <div>
          <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
          />
          {/* Component tag一定要大寫開頭 */}
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
            click={this.switchNameHandler.bind(this, "Brady!!!")}
            changed={this.nameChangedHandler}
          >
            {/* 盡可能使用bind寫法 */}
            Job: Professional baseball player
          </Person>
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
          />
        </div> : null}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
  }
}

export default App;
