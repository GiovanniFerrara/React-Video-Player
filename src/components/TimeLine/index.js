import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TimeLine = ({ currentTime, handleTimeLineClick }) => {
  return (
    <div>

    </div>
  );
}

export default TimeLine;
TimeLine.propTypes = {
  currentTime: PropTypes.number.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
}
