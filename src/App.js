import React from 'react';
import './App.css';

export default function App() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize 
   * the state array with the same 2 items below
   * 
   * Don't worry about fixing `addItem` quite yet.
   */
  const thingsArray = ["Thing 1", "Thing 2"]
  
  function addItem() {
      // We'll work on this next
      // const newThingText = `Thing ${thingsArray.length + 1}`
      // thingsArray.push(newThingText)
      // document.getElementById()
      // console.log(thingsArray)
      console.log("clicked")
  }
  
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}
