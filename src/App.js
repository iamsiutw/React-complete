import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "qaz", name: "Messie", age: 38 },
      { id: "wsx", name: "Wang", age: 36 },
      { id: "edc", name: "Nadal", age: 33 }
    ],
    otherState: "something",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const person = this.state.person;
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };

  nameChangedHandler = (event, id) => {
    // 取得index
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };

  render() {
    let persons = null;
    let btnClass = '';
    // 用map()方法render陣列資料
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;      
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); // classes = ["red"]
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // classes = ["red", "bold"]
    }

    return (
      
      <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle persons
          </button>
          {/* 不建議此寫法 因效能差 */}
          {persons}
        </div>
     
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
  }
}

export default App;
