import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }
  incChange = () => {
    this.setState(state  => ({
      counter: this.state.counter - 1
    }))
  }

  decChange = () => {
    this.setState(state => ({
      counter: this.state.counter + 1
    }))
  }

  randomIntFromInterval = () => { 
    this.setState(state => ({
      counter: +Math.floor(Math.random() * (50 - (-50) + 1) + (-50))
    }))
  }
  
  resetChange = () => {
    this.setState(state => ({
      counter: this.props.counter
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.incChange}>INC</button>
          <button onClick={this.decChange}>DEC</button>
          <button onClick={this.randomIntFromInterval}>RND</button>
          <button onClick={this.resetChange}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;