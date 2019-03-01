import React, { Component } from 'react'
import PlayerScreen from './PlayerScreen'
import fakeData from '../../utils/seed/hotspots.json'
import { _fetch } from '../../utils/mock/functions.js'
import videoID from '../../utils/data/createAVideoPlayer.mp4'

class PlayerPage extends Component {
  constructor(props) {
    super(props)
    // APPLICATION STATE
    this.state = {
      currentTime: 0,
      duration: 0,
      isLoading: true,
      isPlaying: false,
      videoSrc: "",
      hotspots: [],
      error: {}
    }
    // bind methods
    this.fetchVideo = this.fetchVideo.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.getVideoInfo = this.getVideoInfo.bind(this);
  }
  componentDidMount() {
    this.fetchVideo(videoID)
  }

  getVideoInfo(videoInfo) {
    if (videoInfo) {
      const { duration, currentTime } = videoInfo;
      this.setState({
        duration,
        currentTime,
      })
    }
  }

  handlePlayClick(item) {
    if (!this.state.isPlaying) item.current.play();
    if (this.state.isPlaying) item.current.pause();
    this.setState((prevState) => {
      return {
        isPlaying: !prevState.isPlaying
      }
    })
  }
  // Fetch the fake video data
  async fetchVideo(url) {
    const videoSrc = await _fetch(url)
    if (!videoSrc) {
      return this.setState({
        error: { videoSrc: "There was a problem to connect with the DB" },
        isLoading: false
      })
    }
    return this.setState({
      videoSrc,
      isLoading: false
    })
  }

  render() {
    return (
      <>
        <div className="container">
          <PlayerScreen {...this.state}
            handlePlayClick={this.handlePlayClick}
            getVideoInfo={this.getVideoInfo}
          />
        </div>
      </>
    )
  }
}

export default PlayerPage