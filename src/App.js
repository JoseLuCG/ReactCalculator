import { useEffect, useRef, useState } from 'react';
import './App.css';
import History from './components/History/History.jsx';

function App() {
  const [ firstNumber, setFirstNumber ] = useState(0);
  const [ secondNumber, setSecondNumber ] = useState(0);
  const operator = useRef("");
  const [ result, setResult ] = useState(0);
  const memory = useRef(0);
  const [ resultsHistory, setResultsHistory ] = useState([]);
  const firstRender = useRef(true);

//Numbers handlers:
  function changeFirstNumberHandler (event) {
    setFirstNumber(event.target.value);
  }
  function changeSecondNumberHandler (event) {
    setSecondNumber(event.target.value);
  }

//Button Handlers
  function addHandler() {
    operator.current = "+";
    let resultSuma = 0; 
    resultSuma = parseFloat(firstNumber) + parseFloat(secondNumber);
    return setResult(resultSuma); 
  }
  function subtractHandler() {
    operator.current = "-";
    let resultSubtract = 0;
    resultSubtract = parseFloat(firstNumber) - parseFloat(secondNumber);
    return setResult(resultSubtract);
  }
  function multiplyHandler() {
    operator.current = "x";
    let resultMultiply = 0;
    resultMultiply = parseFloat(firstNumber) * parseFloat(secondNumber);
    return setResult(resultMultiply);
  }
  function divisionHandler() {
    operator.current = "/";
    let resultDivision = 0;
    resultDivision = parseFloat(firstNumber) / parseFloat(secondNumber);
    return setResult(resultDivision);
  }
  function deleteHandler() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
  }

  //Change of memory:
  function memorychange() {
    memory.current = result;
  }
  function memoryRecover() {
    setFirstNumber(memory.current);
  }
  

  useEffect(
    ()=>{

      if (firstRender.current === true){
        firstRender.current = false;
      }else {
        console.log("firstNumber state:", firstNumber);
        console.log("SecondNumber state:", secondNumber);
        console.log("Result :", result);
        console.log("In memory:", memory);
        console.log("Operador:",operator.current);
        const resultData = {
          firstNumber,
          secondNumber,
          operator: operator.current,
          result,
        }
        setResultsHistory([...resultsHistory,resultData])
      }
    },[result]
  );

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
      <h1>Historial de operaciones:</h1>
      <History results={resultsHistory} />
    </>
  );
}

export default App;
