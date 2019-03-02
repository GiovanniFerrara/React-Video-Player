import React, { Component } from 'react';
import PlayerBody from './components/PlayerBody';
import './styles/base/reset.css'
import './styles/app.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={PlayerBody} />
      </Router>

    )
  }
}

export default App;
