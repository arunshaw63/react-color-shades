import React,{useState,useEffect} from 'react';
import Shades from './components/Shades';
import Shadeinput from './components/Shadeinput';
import './App.css';
import randomColor from "randomcolor";

function App() {   
   const [color, setColor] = useState("green");

   const onInputChange = (e) => {
    setColor( e.target.value );
  };

  useEffect(() => {
    setColor(randomColor());
  }, []);

  return (
    <div className="App">
      
      <Shadeinput color={color} onInputChange={onInputChange} />
      <Shades color={color}/>
    </div>
  );
}

export default App;

