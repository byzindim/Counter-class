import React, {useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import CourseMoney from './services/CourseMoney'


const App = () => {
  const valuteService = new CourseMoney();
  const [inputValue, setInputValue] = useState();
  const [textArea, setTextArea] = useState();
  const [valuteValue, setValuteValue] = useState()

  useEffect(() => {
    onValute()
  },[])
  
  const onInputValue = (e) => {
    setInputValue(Number(e.target.value)) 
  }

  const convertValute = () => {
    setTextArea(inputValue/valuteValue) 
  }
  const onValute = () => {
    valuteService
      .getValutes()
      .then(onCourse)
  }
  const onCourse = (valuteValue) => {
    setValuteValue(valuteValue)
  }

  return (
    <div className="app">
      <input type="text" onChange={onInputValue}/>
      <input type="text" value={textArea} />
      <div className="convert">{null}</div>
      <div className="controls">
        <button onClick={convertValute}>INC</button>
        <button onClick={null}>DEC</button>
        <button onClick={null}>RND</button>
        <button onClick={null}>RESET</button>
      </div>
    </div>
  )
   
}

export default App;