import './App.css';
import React from 'react';

function App() {
  // Can have numbers, strings and arrays
  const title = 'How much cash have you made today';
  const monniesNumber = 0
  const link = 'http://www.google.com'

  // const object/boolean = { cannot have object or booleans, will not work }
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>You have made { monniesNumber } monnies</p>
        <p> { 10 } </p>
        <p> { [1 ,2, 3, " example array"] }</p>
        <p> { Math.random() * 10 } </p>

        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}
//exporting app component, which is then imported from the index.js
export default App;
