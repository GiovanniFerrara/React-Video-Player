import React, { Component } from 'react';
import PlayerPage from './components/PlayerPage';
import './styles/base/reset.css'
import './styles/app.sass'
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={PlayerPage} />
      </Router>

    )
  }
}

export default App;
