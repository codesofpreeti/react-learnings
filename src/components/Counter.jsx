import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const add = () =>{
    setCounter(counter+1);
  }
  const minus =() =>{
    setCounter(counter-1);
  }

  return (
    <>
      <h2>counter value: {counter} </h2>
      <button onClick={add}>Increase by 1</button>
      <br></br>
      <button onClick={minus}>Decrease by 1</button>
    </>
  );
};

export default Counter;
