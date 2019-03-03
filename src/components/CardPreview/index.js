import PropTypes from 'prop-types';
import './style.sass';
import HotSpot from './HotSpot';
import CardItem from './CardItem';
import React, { Component } from 'react';
import Video from '../Video';


// In this component there are 3 things: an hotspot or bookmark, a CardItem which is the a card with the thumbnail 
// and the note and an instance of the Video component, which is needed to have the possibility to extract the canvas at any time 
// without mutating the the app state

class CardPreview extends Component {
  constructor(props) {
    super(props)
    this.generateThumnail = this.generateThumnail.bind(this);
    this.canvasRef = React.createRef()
    this.videoRef = React.createRef()
  }
  componentDidMount() {

    // Set the time when to take the snapshot
    this.videoRef.current.currentTime = this.props.time;
  }

  // Generate the thumnail and paste on canvas
  generateThumnail() {
    console.log("call generateThumnail")
    const canvas = this.canvasRef.current;
    canvas.getContext('2d').drawImage(this.videoRef.current, 0, 0, 300, 150);
    debugger
  }
  render() {
    const { time, note, duration, handleHotspotClick } = this.props
    return (
      <div className="card-preview">
        <HotSpot
          time={time}
          handleHotspotClick={handleHotspotClick}
          duration={duration}
          generateThumnail={this.generateThumnail}
        />
        <CardItem
          canvasRef={this.canvasRef}
          note={note}
          time={time}
          duration={duration}
        />
        <Video
          videoSrc={this.props.videoSrc}
          videoElement={this.videoRef}
          handlePlayClick={() => { }}
          onLoadedData={() => { }}
          getVideoInfo={() => { }}
          videoClassNames={"video--hidden"}
        />
      </div>
    )
  }
}

export default CardPreview;

CardPreview.propTypes = {
  time: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  handleHotspotClick: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  curretTime: PropTypes.number,
  videoElement: PropTypes.object.isRequired,
  videoSrc: PropTypes.string.isRequired,
}