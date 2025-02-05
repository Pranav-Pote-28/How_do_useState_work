import React, { useState } from 'react'

function App() {

  const [count,setCount]=useState(4)
  const [theme,setTheme]=useState('red')

  function decrementCount(){
    setCount((prevCount)=>{
      return prevCount-=1;
    });

    setTheme((prevTheme)=>{
      return prevTheme='Blue';
    })
  }

  function incrementCount( ){
    setCount(count+1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>  
  );
}

export default App;
