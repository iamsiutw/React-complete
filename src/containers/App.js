import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    console.log(props, 'app.js constructor...');
  }

  state = {
    persons: [
      { id: "qaz", name: "Messie", age: 38 },
      { id: "wsx", name: "Wang", age: 36 },
      { id: "edc", name: "Nadal", age: 33 }
    ],
    otherState: "something",
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('app.js getDerivedStateFromProps...', props)
    return state;
  }


  // render 後執行
  componentDidMount() {
    console.log('app.js componentDidMount');
  }

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
    console.log('app.js render...')

    let persons = null;

    // 用map()方法render陣列資料
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
  }
}

export default App;
