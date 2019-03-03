import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass';
import CardPreview from '../CardPreview'

const TimeLine = ({ currentTime, videoSrc, duration, skipToTime, handleTimeLineClick, hotSpots, handleHotspotClick, videoElement }) => {

  const completionRate = 100 * currentTime / duration;
  return (
    <div className="time-line"
      onClick={(e) => handleTimeLineClick(e)}
    >

      {hotSpots.map((hotspot) => {
        return (
          <CardPreview
            key={hotspot.id}
            time={hotspot.time}
            note={hotspot.note}
            duration={duration}
            handleHotspotClick={handleHotspotClick}
            videoElement={videoElement}
            currentTime={currentTime}
            videoSrc={videoSrc}
          />
        )
      })}

      <div style={{
        width: completionRate + "%"
      }} className="time-line--stroke">
      </div>
    </div>
  );
}

export default TimeLine;

TimeLine.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
  hotSpots: PropTypes.array.isRequired,
  videoElement: PropTypes.object,
  videoSrc: PropTypes.string.isRequired,
}
