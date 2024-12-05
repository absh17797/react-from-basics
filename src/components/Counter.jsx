import React, { useState } from 'react';

const Counter = () => {
    // const [counter, setCounter] = useState(0);

    // // Direct Update
    // const incrementDirect = () => {
    //   setCounter(counter + 1); // Directly use the current counter value
    // };
  
    // // Increment using Previous State Function
    // const incrementPrevState = () => {
    //   setCounter((prev) => prev + 1); // Use previous state
    // };
  
    // return (
    //   <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //     <h1>Counter: {counter}</h1>
    //     <button onClick={incrementDirect} style={{ margin: '10px', padding: '10px' }}>
    //       Increment (Direct Update)
    //     </button>
    //     <button onClick={incrementPrevState} style={{ margin: '10px', padding: '10px' }}>
    //       Increment (Using Previous State)
    //     </button>
    //   </div>
    // );



    const [directCounter, setdirectCounter] = useState(0);
    const [prevCounter, setprevCounter] = useState(0);

    // Direct Update
    const incrementBoth = () => {
      setdirectCounter(directCounter + 1); // Directly use the current counter value
      setprevCounter((prev) => prev + 1); // Use previous state
    };
    const decrementBoth = () => {
      setdirectCounter(directCounter - 1); // Directly use the current counter value
      setprevCounter((prev) => prev - 1); // Use previous state
    };
    const validationMessage = "Maximum Value for counter reached";
    const maxCounter = 5;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Direct Counter: {directCounter}</h1>
        <h1>Prev Counter: {prevCounter}</h1>
        <button 
          onClick={incrementBoth} 
          style={{ margin: '10px', padding: '10px' }}
          disabled = {(directCounter  > maxCounter || prevCounter > maxCounter)}  
        >
          Increment (Direct and Prev Update)
        </button>
        { (directCounter > maxCounter) && (<span style={{ color: 'red', marginTop: '10px' }}>{validationMessage}</span>)}
        <button 
          onClick={decrementBoth} 
          disabled = {(directCounter === 0 || prevCounter === 0)}  
          style={{ margin: '10px', padding: '10px' }}>
          Decrement (Direct and Prev Update)
        </button>
      </div>
    );

















}

export default Counter