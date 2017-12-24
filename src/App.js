import React, { Component } from 'react';
import './App.css';
import { HomePage, TutorPage } from './pages';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/tutors' component={TutorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
