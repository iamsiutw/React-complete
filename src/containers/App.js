import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Auxiliary";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("app.js constructor...");
  }

  state = {
    persons: [
      { id: "qaz", name: "Messie", age: 38 },
      { id: "wsx", name: "Wang", age: 36 },
      { id: "edc", name: "Nadal", age: 33 }
    ],
    otherState: "something",
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStateFromProps...", props);
    return state;
  }

  // render 後執行
  componentDidMount() {
    console.log("app.js componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("app.js shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("app.js componentDidUpdate");
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

    this.setState((prevState, props) => {
      return {
        persons: persons, changedCounter: prevState.changedCounter + 1 
      };
    });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };
  
  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log("app.js render...");

    let persons = null;

    // 用map()方法render陣列資料
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>        
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
  }
}

export default withClass(App, classes.App);
