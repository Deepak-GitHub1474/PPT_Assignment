import "./App.css";
import React from "react";

export default function App() {
  const [result, setResult] = React.useState("0.00");

  const handleClick = (value) => {
    setResult(prevResult => {
      if (prevResult === "0.00") {
        return value;
      } else {
        return prevResult + value;
      }
    });
  };

  const handleClear = () => {
    setResult("0.00");
  };

  const handleEqual = () => {
    setResult(prevResult => {
      try {
        // Evaluate the expression and round the result to 2 decimal places
        // eslint-disable-next-line no-eval
        const evaluatedResult = eval(prevResult);
        return evaluatedResult;
      } catch (error) {
        // Handle error if the expression is invalid
        return "Error";
      }
    });
  };

  return (
    <div className="app">
      <div className="result-container">
        <h2 className="result">{result}</h2>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>
      <div className="btns-container">
        <button className="btn plus" onClick={() => handleClick("+")}>+ </button>
        <button className="btn equal" onClick={handleEqual}> = </button>
        <button className="btn multiply" onClick={() => handleClick("*")}>* </button>
        <button className="btn minus" onClick={() => handleClick("-")}> - </button>
        <button className="btn divide" onClick={() => handleClick("/")}> / </button>
        <button className="btn one" onClick={() => handleClick("1")}> 1 </button>
        <button className="btn two" onClick={() => handleClick("2")}> 2 </button>
        <button className="btn three" onClick={() => handleClick("3")}> 3 </button>
        <button className="btn four" onClick={() => handleClick("4")}> 4 </button>
        <button className="btn five" onClick={() => handleClick("5")}> 5 </button>
        <button className="btn six" onClick={() => handleClick("6")}> 6 </button>
        <button className="btn seven" onClick={() => handleClick("7")}> 7 </button>
        <button className="btn eight" onClick={() => handleClick("8")}> 8 </button>
        <button className="btn nine" onClick={() => handleClick("9")}> 9 </button>
        <button className="btn zero" onClick={() => handleClick("0")}> 0 </button>
      </div>
    </div>
  );
}
