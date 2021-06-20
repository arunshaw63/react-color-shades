import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="emojis"><span  role="img" aria-labelledby="img">🐼🐹🦁🌋🌈🐻</span></div>
      <input
        type="text"
        onChange={onInputChange}
        value={color}
        className="shade-input"
      />
      <div className="emojis"><span  role="img" aria-labelledby="img">🌮🌱🌲🌷🌸🌼</span></div>
    </div>
  );
};

export default ShadeInput;