import React, { useRef } from 'react';
import './style.css';


const Spinner = () => {
  return (
    <div className="loader">
      <div className="innerLoader one"></div>
      <div className="innerLoader two"></div>
      <div className="innerLoader three"></div>
    </div>
  );
}

export default Spinner;
