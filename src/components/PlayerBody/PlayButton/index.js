import React from 'react'
import PropTypes from 'prop-types'
import play from '../../../img/play.png'
import pause from '../../../img/pause.png'
import './style.sass'
import classnames from 'classnames'

const PlayButton = ({ isPlaying, handlePlayClick, videoRef }) => {
  //Change class according if the video is playing or not
  const buttonClasses = classnames("button", {
    'button--play': isPlaying,
    'button--pause': !isPlaying
  })

  return (
    <div className="button__wrapper"
      onClick={() => handlePlayClick(videoRef)}
    >
      <img
        className={buttonClasses}
        src={isPlaying ? pause : play}
        alt="play button"
      />
    </div>
  );
}

PlayButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  videoRef: PropTypes.object.isRequired,
}

export default PlayButton;
