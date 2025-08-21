import { useEffect, useState, useRef } from 'react'
import useCustomEffect from './hooks/use-custom-effect'
import './App.css'

function App() {

  const [count , setCount] = useState(1);


  useCustomEffect(callback , [count]);
  //useEffect(callback , []);


  function callback() {
    console.log("Effect triggered: " , count);

    return () => {
      console.log("Cleanup done!");
    };
  }

  //console.log ("Rerendered , count = " , count);
  // const updateValue = (val) => {

  //   setInputValue(val);
  //   setCount(prevCount => prevCount+1);
  // }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </>
  )
}

export default App
