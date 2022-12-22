import React, {useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import CourseMoney from './services/CourseMoney'


const App = () => {
  const valuteService = new CourseMoney();
  const [inputValue, setInputValue] = useState(0);
  const [textResult, setTextResult] = useState(0);
  const [valuteValue, setValuteValue] = useState();
  const [valuteCode, setValuteCode] = useState();

  useEffect(() => {
    onValute()
  },[])

  const onInputValue = (e) => {
    setInputValue(Number(e.target.value)) 
  }

  const convertValute = () => {
    setTextResult((inputValue/valuteValue).toFixed(4)) 
  }
  const onValute = () => {
    valuteService
      .getValutes()
      .then(onCourse)
  }
  const onCourse = ({valuteValue, valuteCode}) => {
    setValuteValue(valuteValue)
    setValuteCode(valuteCode)
  }

  const onReset = () => {
    setInputValue(0);
    setTextResult(0);
  }
  return (
    <div className="app">
      <input type="text" value={inputValue} onChange={onInputValue}/>
      <input type="text" value={textResult} />
      <div className="convert">{null}</div>
      <div className="controls">
        <button onClick={convertValute}>{valuteCode}</button>
        <button onClick={onReset}>RESET</button>
      </div>
    </div>
  )
   
}

export default App;