// Counter

import './App.css';
import React from "react";

export default function App() {
  let [count, setCount] = React.useState(0)

function increment(){
  setCount(prevCount => prevCount + 1)

}

function decrement(){
  setCount(prevCount => prevCount - 1)
}
  return (
    <div className="app">
      <h1>{count}</h1>
      <div className="btn-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

