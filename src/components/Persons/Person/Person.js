import React, { Component } from "react";
import Proptypes from 'prop-types';

import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass"
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("person.js render...");
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name}, and I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: Proptypes.func,
  name: Proptypes.string,
  age: Proptypes.number,
  changed: Proptypes.func
}

export default withClass(Person, classes.Person);
