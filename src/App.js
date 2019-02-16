import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    person: [
      { name: "Messie", age: 38 },
      { name: "Wang", age: 36 },
      { name: "Nadal", age: 33 }
    ]
  });

  const [otherState, setOtherState] = useState('something')

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log('click');
    // state和setState只有component才有
    setPersonsState({
      person: [
        { name: "Brady", age: 38 },
        { name: "Wang", age: 36 },
        { name: "Nadal", age: 39 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.person[0].name} age={personsState.person[0].age} />
      <Person name={personsState.person[1].name} age={personsState.person[1].age}>
        Job: Professional baseball player
      </Person>
      <Person name={personsState.person[2].name} age={personsState.person[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!' ))
};

export default app;


