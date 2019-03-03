import React, { useRef } from 'react';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import './style.sass'
import PropTypes from 'prop-types'


const CardItem = ({ note, time, duration, canvasRef }) => {

  const CardItemRef = useRef(null);

  let leftPosition = 100 * time / duration;
  //dont position over 90% left
  if (leftPosition > 90) {
    leftPosition = 85
  }
  return (
    <div
      ref={CardItemRef}
      className="card-item"
      style={{
        "left": leftPosition + "%",

      }}
    >
      <Thumbnail canvasRef={canvasRef} />
      <Description note={note} />
    </div>
  );
}

export default CardItem;

CardItem.propTypes = {
  note: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  canvasRef: PropTypes.object.isRequired
}