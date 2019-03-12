import React, { Component } from 'react';
import PlayerContainer from './components/PlayerContainer';
import './styles/base/reset.css'
import './styles/app.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={PlayerContainer} />
      </Router>

    )
  }
}

export default App;
