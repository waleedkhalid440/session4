import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './Message.js';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

  return (
    <div className = {isMorning ? 'dayLight' : 'box'}>

      <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter = {count}/>
      <br />
          <button className = "buttonSize" onClick = {()=> setCount(++count)}>
             Update Counter
          </button>

          <button className = "buttonSize" onClick = {()=> setMorning(!isMorning)}>
             Day Update
          </button>
    </div>
  );
}

export default App;
