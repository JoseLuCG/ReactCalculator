import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(null);
  const [ secondNumber, setSecondNumber ] = useState(null);
  const [ result, setResult ] = useState(0);
  const memory = useRef(0);
//Numbers handlers:
  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }
  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }
//Button Handlers
  function addHandler() {
    let resultSuma = 0; 
    resultSuma = parseFloat(firstNumber) + parseFloat(secondNumber);
    return setResult(resultSuma); 
  }
  function subtractHandler() {
    let resultSubtract = 0;
    resultSubtract = parseFloat(firstNumber) - parseFloat(secondNumber);
    return setResult(resultSubtract);
  }
  function multiplyHandler() {
    let resultMultiply = 0;
    resultMultiply = parseFloat(firstNumber) * parseFloat(secondNumber);
    return setResult(resultMultiply);
  }
  function divisionHandler() {
    let resultDivision = 0;
    resultDivision = parseFloat(firstNumber) / parseFloat(secondNumber);
    return setResult(resultDivision);
  }
  function deleteHandler() {
    setFirstNumber("");
    setSecondNumber("");
    setResult(null);
  }
  function memorychange() {
    memory.current = result;
  }
  function memoryRecover() {
    setFirstNumber(memory.current);
  }

  useEffect(
    ()=>{
      console.log("firstNumber state:", firstNumber);
      console.log("SecondNumber state:", secondNumber);
      console.log("Result :", result);
      console.log("In memory:", memory);
    }
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      <button onClick={addHandler}>+</button>
      <button onClick={subtractHandler}>-</button>
      <button onClick={multiplyHandler}>x</button>
      <button onClick={divisionHandler}>/</button>
      <button onClick={deleteHandler}>C</button>
      <button onClick={memorychange}>M+</button>
      <button onClick={memoryRecover}>MR</button>
      <p>{result}</p>
    </>
  );
}

export default App;
