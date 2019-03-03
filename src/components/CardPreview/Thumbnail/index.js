import React, { Component, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Thumbnail = ({ canvasRef }) => {
  return (
    <canvas style={{ background: "black" }} ref={canvasRef} width={300} height={150} id="canvas"></canvas>
  );
}

export default Thumbnail;

Thumbnail.propTypes = {
  canvasRef: PropTypes.object,
}