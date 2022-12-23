import React, {useState} from 'react';
import { useEffect } from 'react';
import './App.css';
import CourseMoney from './services/CourseMoney'


const App = () => {
  const valuteService = new CourseMoney();

  function useAddHook(initialValue) {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => {
      setValue(e.target.value)
    }
    return {value, onChange, setValue}
  }

  const input = useAddHook(''),
    result = useAddHook(''),
    convert = useAddHook(''),
    valute = useAddHook('');

  useEffect(() => {
    onValute()
  },[])

  const convertValute = () => {
    result.setValue((input.value/convert.value).toFixed(4)) 
  }
  const onValute = () => {
    valuteService
      .getValutes()
      .then(onCourse)
  }
  const onCourse = ({valuteValue, valuteCode}) => {
    convert.setValue(valuteValue)
    valute.setValue(valuteCode)
  }

  const onReset = () => {
    input.setValue(0);
    result.setValue(0);
  }
  return (
    <div className="app">
      <input type="text" value={input.value} onChange={input.onChange}/>
      <input type="text" value={result.value} onChange={result.onChange}/>
      <div className="convert">{null}</div>
      <div className="controls">
        <button onClick={convertValute}>{valute.value}</button>
        <button onClick={onReset}>RESET</button>
      </div>
    </div>
  ) 
}

export default App;