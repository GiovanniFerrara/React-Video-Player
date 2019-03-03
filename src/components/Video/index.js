import React from 'react';
import PropTypes from 'prop-types';
import './style.sass'
const Video = ({ videoElement, videoSrc, videoClassNames, onLoadedData, getVideoInfo, handlePlayClick }) => {
  return (
    <>
      <video
        type="video/mp4"
        className={videoClassNames}
        onLoadedData={(e) => { onLoadedData(e.target) }}
        onTimeUpdate={(e) => { getVideoInfo(e.target) }}
        onClick={(e) => handlePlayClick()}
        ref={videoElement}
        src={videoSrc}
      >
      </video>
    </>
  );
}

export default Video;

Video.propTypes = {
  videoElement: PropTypes.object,
  videoSrc: PropTypes.string.isRequired,
  videoClassNames: PropTypes.string,
  onLoadedData: PropTypes.func,
  getVideoInfo: PropTypes.func,
  handlePlayClick: PropTypes.func,
}
