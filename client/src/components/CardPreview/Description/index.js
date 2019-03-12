import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'

const Description = ({ note, time, duration }) => {
  return (
    <div className="description">
      <p>{note}</p>
    </div>
  );
}

export default Description;
