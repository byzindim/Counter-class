import React from 'react';
import './App.css';
import CourseMoney from './services/CourseMoney';


class App extends React.Component {
    state = {
      nameValuteAMD: '',
      valueValuteAMD: '',
      convertValue: '',
    }

  courseMoney = new CourseMoney();

  componentDidMount() {
    this.updateNameValute()
    this.updateConvert()
  }
  updateConvert = () => {
    this.courseMoney.getValutes()
    .then(this.onConvert)
  }
  updateNameValute = () => {
    this.courseMoney.getValutes()
    .then(this.onValute)
  }

  onValute = ({nameValuteAMD, valueValuteAMD}) => {
    this.setState({nameValuteAMD, valueValuteAMD})
  }

  onConvert = (convertValue, valueValuteAMD) => {
    this.setState(convertValue => {
      convertValue = 100/valueValuteAMD
    }) 
}
  
  // const [counter, setCounter] = useState(0);
  // const {Name} = result;
  // const incChange = () => {
  //   setCounter(counter  => (counter - 1))
  // }

  // const decChange = () => {
  //   setCounter(counter  => (counter + 1))
  // }

  // const randomIntFromInterval =() => { 
  //   setCounter(+Math.floor(Math.random() * (50 - (-50) + 1) + (-50)));
  // }
  
  // const resetChange = () => {
  //   setCounter(0);
  // }
render() {
  const {nameValuteAMD, valueValuteAMD, convertValue} = this.state;
  return (
    <div className="app">
      <div className="convert">{convertValue}</div>
      <div className="controls">
        <input type="text" defaultValue=""/>
        <button onClick={this.onConvert}>{nameValuteAMD}</button>
        <button onClick={null}>{valueValuteAMD}</button>
        <button onClick={null}>RND</button>
        <button onClick={null}>RESET</button>
      </div>
    </div>
  )
}
    
}

export default App;