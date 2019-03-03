import PropTypes from 'prop-types';
import './style.sass';
import HotSpot from './HotSpot';
import CardItem from './CardItem';
import React, { Component } from 'react';

class CardPreview extends Component {
  constructor(props) {
    super(props)
    this.generateThumnail = this.generateThumnail.bind(this);
    this.canvasRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.props.curretTime)
  }

  // Get the canvas ref
  generateThumnail() {
    console.log("call generateThumnail")
    const canvas = this.canvasRef.current;
    console.log(this.props.videoElement, canvas)
    canvas.getContext('2d').drawImage(this.props.videoElement.current, 0, 0, 300, 150)
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
  curretTime: PropTypes.number.isRequired,
  videoElement: PropTypes.object.isRequired,
}