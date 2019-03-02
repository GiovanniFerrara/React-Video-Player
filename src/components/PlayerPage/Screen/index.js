import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.sass';
import PlayButton from '../PlayButton';
import classnames from 'classnames';
import Spinner from '../../commons/Spinner'
import TimeLine from './../../TimeLine'

const Screen = ({ videoSrc, isPlaying, handlePlayClick, getVideoInfo, isLoading, onLoadedData, currentTime, duration, handleTimeLineClick }) => {

  // use refs to get the video control
  const videoRef = useRef(null);

  // Chose the classNames and load the spinner if loading
  const videoWrapperClassNames = classnames({
    "player_screen": true,
    "player_screen__wrapper--loading": isLoading && true,
    "player_screen__wrapper": !isLoading && true
  })

  const videoClassNames = classnames({
    "player_screen": !isLoading && true,
    "spinner__wrapper": isLoading && true
  })

  // Render the component 

  return (
    <div className={videoWrapperClassNames}>
      {!isLoading ? (
        <>
          <video
            className={videoClassNames}
            onLoadedData={(e) => { onLoadedData(e.target) }}
            onTimeUpdate={(e) => { getVideoInfo(e.target) }}
            onClick={(e) => handlePlayClick(videoRef)}
            ref={videoRef}
            src={videoSrc}
          >
          </video>
          <PlayButton handlePlayClick={handlePlayClick} isPlaying={isPlaying} videoRef={videoRef} />
          <div className="controls">
            <TimeLine
              currentTime={currentTime}
              duration={duration}
              handleTimeLineClick={handleTimeLineClick} />
          </div>
        </>
      ) : (
          <Spinner />
        )
      }

    </div>
  );
}

Screen.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getVideoInfo: PropTypes.func.isRequired,
  onLoadedData: PropTypes.func.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
}

export default Screen;
