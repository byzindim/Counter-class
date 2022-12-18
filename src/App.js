import React from 'react';
import { useState } from 'react';
import './App.css';
const App = () => {
  const [counter, setCounter] = useState(0);
  
  const incChange = () => {
    setCounter(counter  => (counter - 1))
  }

  const decChange = () => {
    setCounter(counter  => (counter + 1))
  }

  const randomIntFromInterval =() => { 
    setCounter(+Math.floor(Math.random() * (50 - (-50) + 1) + (-50)));
  }
  
  const resetChange = () => {
    setCounter(0);
  }

    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={incChange}>INC</button>
          <button onClick={decChange}>DEC</button>
          <button onClick={randomIntFromInterval}>RND</button>
          <button onClick={resetChange}>RESET</button>
        </div>
      </div>
    )
}

export default App;