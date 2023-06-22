import Home from "./Home";

import {useState} from "react";
 function App() {
  const[num, setNum] = useState(0);
  return (
    <div className="App">
     <h1>{num}</h1>
    <p>
      {num === 15 ? 'max' : num === 1 ? 'min' : num === 11 ? 'get out of here': ''}
    </p>
    <button onClick= { () => {
      if(num < 15){
        setNum(num+1)
      }
     
    }}>+</button>

    <button onClick={() => {
    if(num > 0){
      setNum(num-1)
    };
      
    }}>-</button>

    <button onClick={() => {
      setNum(0)
    }}>reset</button>

    <button onClick={() => {
      setNum(num+5)
    }}>+5</button>

    <button onClick={() => {
      setNum(1)
    }}>min</button>

<button onClick={() => {
      setNum(15)
    }}>max</button>


<button onClick={() => {
      setNum(num+500000   )
    }}>+500000</button>
    </div>
  );
}

export default App;