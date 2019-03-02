import PropTypes from 'prop-types';
import bookmark from './../../../img/bookmark.png';
import React from 'react';
import "./style.sass";

const HotSpot = ({ time, duration, handleHotspotClick }) => {
  // Pass down the timeRate of completion in %
  const timeRate = time * 100 / duration;
  return (
    <div
      style={{
        left: timeRate + "%"
      }} className="hotspot">
      <img
        onClick={(e) => handleHotspotClick(e, time)}
        className="hotspot__img"
        src={bookmark}
        alt="hotspot" />
    </div>
  );
}

export default HotSpot;

HotSpot.propTypes = {
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  handleHotspotClick: PropTypes.func.isRequired,
}