import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';
import PlayButton from '../PlayButton';
import classnames from 'classnames';
import Spinner from '../../commons/Spinner'
import TimeLine from './../../TimeLine'
import Video from '../../Video'
const Screen = ({
  videoSrc,
  isPlaying,
  handlePlayClick,
  getVideoInfo,
  isLoading,
  onLoadedData,
  currentTime,
  duration,
  handleTimeLineClick,
  hotSpots,
  handleHotspotClick,
  videoElement
}
) => {

  // Chose the classNames and load the spinner if loading
  const videoWrapperClassNames = classnames({
    "player_screen": true,
    "player_screen__wrapper--loading": isLoading && true,
    "player_screen__wrapper": !isLoading && true
  })

  const videoClassNames = classnames({
    "player_screen": !isLoading,
    "spinner__wrapper": isLoading
  })

  // Render the component 

  return (
    <div className={videoWrapperClassNames}>
      {!isLoading ? (
        <>
          <Video
            handlePlayClick={handlePlayClick}
            onLoadedData={onLoadedData}
            videoClassNames={videoClassNames}
            videoSrc={videoSrc}
            getVideoInfo={getVideoInfo}
            videoElement={videoElement}
          />
          <PlayButton
            handlePlayClick={handlePlayClick}
            isPlaying={isPlaying}
            videoElement={videoElement}
          />
          <div className="controls">
            <TimeLine
              currentTime={currentTime}
              duration={duration}
              handleTimeLineClick={handleTimeLineClick}
              hotSpots={hotSpots}
              handleHotspotClick={handleHotspotClick}
              videoElement={videoElement}
              currentTime={currentTime}
              videoSrc={videoSrc}
            />

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
  hotSpots: PropTypes.array.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getVideoInfo: PropTypes.func.isRequired,
  onLoadedData: PropTypes.func.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
  videoElement: PropTypes.object,
}

export default Screen;
