import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Personal from './components/Personal';
import './App.css';
import '../public/stylesheet/form.css';

class App extends Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Personal} />
      </Router>
    );
  }
}

export default App;
