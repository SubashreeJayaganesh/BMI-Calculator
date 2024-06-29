

import { useState } from 'react'
import './App.css'


function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculate = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmivalue = weight / (heightInMeters * heightInMeters);
      setBmi(bmivalue.toFixed(2));
      if (bmivalue < 18.5) {
        setBmiStatus("Underweight")
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("please enter valid number")
    }
  }
  const clear = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
  }
  return (
    <>
      <div className='BMI-Calculator'>
        <div className='box'>
          {/* <img src=".//public/img.jpg" alt='img' /> */}
        </div>
        <div className='data'>
          <h1>BMI-Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage} </p>}
          <div className='input-container'>
            <label htmlFor='height' >height:</label>
            <input type='text' id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>weight</label>
            <input type='text' id='weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button className='button' onClick={calculate}>Calculate BMI</button>
          <button className='clear' onClick={clear}>Clear</button>
          {bmi !== null && (<div className='result'>
            <p>
              your BMI value is:{bmi};
            </p>
            <p>
              your status:{bmiStatus};
            </p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
