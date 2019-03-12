import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../commons/Spinner'
import Player from '../Player';
import classnames from 'classnames';

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

  return (
    <div className={videoWrapperClassNames}>
      {!isLoading ? (
        <Player
          currentTime={currentTime}
          duration={duration}
          handleTimeLineClick={handleTimeLineClick}
          hotSpots={hotSpots}
          handleHotspotClick={handleHotspotClick}
          videoElement={videoElement}
          currentTime={currentTime}
          videoSrc={videoSrc}
          onLoadedData={onLoadedData}
          getVideoInfo={getVideoInfo}
          isPlaying={isPlaying}
          handlePlayClick={handlePlayClick}
        />
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
  isLoading: PropTypes.bool,
  getVideoInfo: PropTypes.func.isRequired,
  onLoadedData: PropTypes.func.isRequired,
  handleTimeLineClick: PropTypes.func.isRequired,
  videoElement: PropTypes.object,
}

export default Screen;
