import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './App.css';
import '../public/stylesheet/form.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='flex items-center justify-center mt3'>
          <Route exact path='/' component={PersonalForm} />
          <Route path='/address' component={AddressForm} />
          <Route path='/education' component={EducationForm} />
          <Route path='/experience' component={ExperienceForm} />
        </div>
      </Router>
    );
  }
}

export default App;
