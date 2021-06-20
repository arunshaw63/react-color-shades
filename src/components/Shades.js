import React,{useState,useEffect} from 'react';
import Values from 'values.js';
import isColor from 'is-color';
import Shade from './Shade';

const Shades = ({color}) => {
	 const [shades, setShades] = useState([]);
   
  useEffect(() => {
    if (isColor(color)) {
      createShades(color);
    }
  }, [color]);

 const createShades = (color) => {
    const shades = new Values(color).shades(1);
    console.log(shades[0].rgbString());
    setShades(shades);
  };	

  return (
    <div className="shades">
    {
    	shades.map((shade, index)=>(
        
           <Shade shade={shade} index={index}/>
    		))
    }
    </div>
  )
}

export default Shades;

