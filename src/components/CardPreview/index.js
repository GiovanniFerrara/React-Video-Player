import React from 'react';
import PropTypes from 'prop-types'
import './style.sass';
import HotSpot from './HotSpot';

const CardPreview = ({ time, note, duration, handleHotspotClick }) => {

  return (
    <div className="card-preview">
      <HotSpot
        time={time}
        handleHotspotClick={handleHotspotClick}
        duration={duration}
      />
    </div>
  );
}

export default CardPreview;

CardPreview.propTypes = {
  time: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  handleHotspotClick: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
}