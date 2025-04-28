import { useState } from "react";
import "./App.css";

function App() {
  let [counter,setCounter] =  useState(5)

  // let counter = 5;

  const addValue = () => {
    setCounter(counter+1)
    console.log("clicked", counter);
    

  };

  const removeValue = () => {
    console.log("clicked", counter);
    counter =counter-1
    setCounter(counter)
  };

  return (
    <>
      <h1>Divyansh aur raect </h1>
      <h2>Counter value:{counter} </h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value{counter}</button>
      <button>footer{counter}</button>
    </>
  );
}

export default App;
