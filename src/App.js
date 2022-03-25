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
  function deleteHistorial() {
    setResultsHistory([]);
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
    <div class="container">
      <h1 class="Cal">Calculadora</h1>
      <div class="inputs">
        <input class="input" type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
        <input class="input" type="text" value={secondNumber} onChange={changeSecondNumberHandler}/>
      </div>
      <div class="buttons">
        <button class="add" onClick={addHandler}>+</button>
        <button class="subtract" onClick={subtractHandler}>-</button>
        <button class="x" onClick={multiplyHandler}>x</button>
        <button class="division" onClick={divisionHandler}>/</button>
        <button class="C" onClick={deleteHandler}>C</button>
        <button class="M+" onClick={memorychange}>M+</button>
        <button class="MR" onClick={memoryRecover}>MR</button>
        <button class="deleteHistorial" onClick={deleteHistorial}>Del</button>
      </div>
      <p id="result">{result}</p>
      <h1>Historial de operaciones:</h1>
      <History results={resultsHistory}/>
    </div>
    </>
  );
}

export default App;
