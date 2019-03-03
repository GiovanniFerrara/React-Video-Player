import React, { Component, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.sass'
const Thumbnail = ({ canvasRef }) => {
  return (
    <canvas className="thumbnail" style={{ background: "black" }} ref={canvasRef} width={200} height={100} id="canvas"></canvas>
  );
}

export default Thumbnail;

Thumbnail.propTypes = {
  canvasRef: PropTypes.object,
}