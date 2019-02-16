import React from "react";

const person = props => {
  // return <p>I'm a Person, and I'm {Math.floor(Math.random() * 30)} years old.</p>
  return (
    <div>
      <p>I'm {props.name}, and I'm {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
