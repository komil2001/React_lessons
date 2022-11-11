import React,{useState} from "react";
function App() {
const [count,setCount] = useState(0)

  function inc () {
    setCount(count+1)
  }
  function dec () {
    setCount(count-1)
  }
  function res (){
    setCount(0)
  }
  return (
    <>
    <h3>Count:{count}</h3>
    <button
    onClick={inc}
    >INCR</button>
    <button
    onClick={dec}
    >DECR</button>
    <button onClick={res}>Reset</button>
    </>
  );
}

export default App;
