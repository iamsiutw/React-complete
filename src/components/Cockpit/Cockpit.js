import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";

const cockpit = props => {

  const toggleBtnRef = useRef(null); //指定變數 toggleBtnRef 使用 useRef() 來取得DOM

  useEffect(() => {
    console.log("Cockpit.js userEffect...");
    // setTimeout(() => {
    //   alert("save data to cloud");
    // }, 1000);
    toggleBtnRef.current.click(); // 一定要在 useEffect() 內呼叫 toggleBtnRef，因此時 DOM 已建立完成才能取得。
    return () => {
      console.log("Cockpit.js cleanup work in useEffect...");
    };
  }, []);

  useEffect(() => {
    console.log("Cockpit.js 2nd userEffect...");
    return () => {
      console.log("Cockpit.js 2nd cleanup work in useEffect...");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red; // CSS Module
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ["red"]
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ["red", "bold"]
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
