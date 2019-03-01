import React, { Component, useRef } from 'react'
import PropTypes from 'prop-types'
import video from '../../../data/createAVideoPlayer.mp4'
import './style.sass'
import PlayButton from '../PlayButton';

const PlayerScreen = () => {

  const videoRef = useRef(null);
  const play = () => { videoRef.current.play() };
  return (
    <div className="player_screen__wrapper">
      <video
        className="player_screen"
        onClick={play}
        ref={videoRef}
        src={video}>
      </video>
      <PlayButton />
    </div>
  );
}

export default PlayerScreen;
