import React, { useRef } from 'react';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import './style.sass'


const CardItem = ({ note, time, duration }) => {
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
      <Description note={note} />
    </div>
  );
}

export default CardItem;
