import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass';


const TimeLine = ({ currentTime, duration, handleTimeLineClick }) => {

  const completionRate = 100 * currentTime / duration;

  return (
    <div className="time-line"
      onClick={(e) => handleTimeLineClick(e)}
    >

      <div style={{
        width: completionRate + "%"
      }} className="time-line--stroke">
      </div>
    </div>
  );
}

export default TimeLine;

TimeLine.propTypes = {
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
}
