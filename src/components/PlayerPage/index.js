import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerScreen from './PlayerScreen'

class PlayerPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <PlayerScreen />
        </div>
      </>
    )
  }
}

export default PlayerPage