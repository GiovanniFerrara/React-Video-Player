import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './style.sass';
import PlayButton from '../PlayButton';
import classnames from 'classnames';
import Spinner from '../../commons/Spinner'

const PlayerScreen = ({ videoSrc, isPlaying, handlePlayClick, isLoading }) => {

  const videoRef = useRef(null);

  // const play = () => { videoRef.current.play() };

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
            onClick={() => handlePlayClick(videoRef)}
            ref={videoRef}
            src={videoSrc}
          >
          </video>
          <PlayButton handlePlayClick={handlePlayClick} isPlaying={isPlaying} videoRef={videoRef} />
        </>
      ) : (
          <Spinner />
        )
      }

    </div>
  );
}

PlayerScreen.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  handlePlayClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default PlayerScreen;
