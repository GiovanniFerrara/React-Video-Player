import React, { Component } from 'react'
import Screen from './Screen'
import hotSpots from '../../utils/seed/hotspots.json'
import { _fetch } from '../../utils/mock/functions.js'
import videoID from '../../utils/data/createAVideoPlayer.mp4'
import { queryString } from '../../utils/functions'

class PlayerBody extends Component {
  constructor(props) {
    super(props)
    // APPLICATION STATE
    this.state = {
      currentTime: 0,
      startingTime: 0,
      duration: 0,
      isLoading: true,
      isPlaying: false,
      isVideoMount: false,
      videoSrc: "",
      hotSpots: [],
      error: {},
    }
    // bind methods
    this.fetchVideo = this.fetchVideo.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.getVideoInfo = this.getVideoInfo.bind(this);
    this.getCurrentTimeFromUrl = this.getCurrentTimeFromUrl.bind(this);
    this.skipToTime = this.skipToTime.bind(this);
    this.setStartingTime = this.setStartingTime.bind(this);
    this.onLoadedData = this.onLoadedData.bind(this);
    this.handleTimeLineClick = this.handleTimeLineClick.bind(this);
    this.handleHotspotClick = this.handleHotspotClick.bind(this);
  }
  componentDidMount() {
    //reference the video
    this.videoElement = React.createRef()
    console.log("componentDidMount")
    this.fetchVideo(videoID);
    this.getCurrentTimeFromUrl() && this.setStartingTime(this.getCurrentTimeFromUrl());
    // TODO fetch hotspots by the API
    this.setState({
      hotSpots
    })
  }
  // Hook - Callback that is called once the the player has loaded
  onLoadedData(videoElement) {

    this.setState({
      isVideoMount: true
    })
    this.getVideoInfo(videoElement);
    this.skipToTime(this.state.startingTime);
  }

  // save in the state the video duration and the current time of reproduction, taking the data from the video ref
  getVideoInfo(videoElement) {
    console.log("call getVideoInfo")
    if (videoElement) {
      //attach the video element in order to play,pause and set props from app state component
      const { duration, currentTime } = videoElement;

      // if there is a query in the Url, set the current time = starting time and clean startingTime,
      // else get in the state only the duration and current time on video playing

      this.setState(() => {
        return ({
          duration,
          currentTime: this.state.startingTime ? undefined : currentTime
        })
      })
    }
  }

  // Deserialize the query string and return the time param
  getCurrentTimeFromUrl() {
    console.log("call getCurrentTimeFromUrl")

    return queryString("time", this.props.history.location.search);
  }

  // set the current time of the video according to the time passed to this function
  skipToTime(time) {
    console.log("call skipToTime")
    if (time === null) return;
    if (this.state.startingTime || time) {
      this.setState({
        currentTime: time,
        startingTime: 0,
      })
    }
    this.videoElement.current.currentTime = time;
  }
  // set the the starting time in the state
  setStartingTime(time) {
    console.log("call setStartingTime")
    //time param is required
    if (time === null) return 0;
    this.setState({
      startingTime: parseInt(time)
    })
  }

  //toggle isPlaying state, on play click
  handlePlayClick() {
    console.log("call handlePlayClick")
    if (!this.state.isPlaying) this.videoElement.current.play();
    if (this.state.isPlaying) this.videoElement.current.pause();
    this.setState((prevState) => {
      return {
        isPlaying: !prevState.isPlaying
      }
    })
  }
  // Fetch the fake video data
  async fetchVideo(url) {
    console.log("call fetchVideo")
    // call the moked version of the fetch API
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

  // Hande the click on the timeline bar

  handleTimeLineClick(e) {
    // prevent interaction with click on timeline and bookmark
    e.stopPropagation()
    const actualRate = e.nativeEvent.offsetX;
    const screenWidth = e.currentTarget.clientWidth;
    const duration = this.state.duration;
    const rateToTime = actualRate * duration / screenWidth;
    this.skipToTime(rateToTime)
  }

  handleHotspotClick(e, time) {
    console.log("call handleHotspotClick")
    // prevent interaction with click on timeline and bookmark
    e.stopPropagation()
    this.skipToTime(time)
    this.props.history.push(`/?time=${time}`)

  }


  render() {
    return (
      <>
        <div className="container">
          <Screen {...this.state}
            handlePlayClick={this.handlePlayClick}
            getVideoInfo={this.getVideoInfo}
            onLoadedData={this.onLoadedData}
            handleTimeLineClick={this.handleTimeLineClick}
            handleHotspotClick={this.handleHotspotClick}
            videoElement={this.videoElement}
          />
        </div>
      </>
    )
  }
}

export default PlayerBody