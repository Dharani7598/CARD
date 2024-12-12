import {React,useState} from 'react'

const Calc = () => {
const [result,setResult]=useState(0);
  const add=()=>{
    const number1=parseFloat(document.getElementById('num1').value);
    const number2=parseFloat(document.getElementById('num2').value);
    const sum=number1+number2;
    setResult(sum);
  };
    const subtract = () => {
        const number1 = parseFloat(document.getElementById('num1').value);
        const number2 = parseFloat(document.getElementById('num2').value);
        const difference = number1 - number2;
        setResult(difference);
      };

      const multiply = () => {
        const number1 = parseFloat(document.getElementById('num1').value);
        const number2 = parseFloat(document.getElementById('num2').value);
        const product = number1 * number2;
        setResult(product);
  };
  

  return (
    <div className='MainDiv'>
        <h1 style={{}}>SIMPLE CALCULATOR</h1>
        Enter Value1:<input type="number" id="num1"/><br></br><br></br>
        Enter Value2:<input type="number" id="num2"/><br></br><br></br>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
        <p>Result is:{result}</p>
    </div>
  )
}
export default Calc
