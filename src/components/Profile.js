import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonalView from './PersonalView';
import AddressView from './AddressView';
import { Link } from 'react-router-dom';
import EducationView from './EducationView';
import ExperienceView from './ExperienceView';

class Profile extends Component {
  render () {
    const { text } = this.props;

    if (text.length < 4) {
      return (
        <div id='contact' className='vw-50'>
          Please go <Link to='/'>back</Link> and fill in your details to see this page.
        </div>
      );
    }

    return (
      <div id='contact' className='vw-50'>
        <PersonalView details={text[0]} />
        <AddressView details={text[1].text.permanentAddr} index={1} onEditChange={this.handleEdit} />
        <AddressView details={text[1].text.presentAddr} />
        <div>
          <h1>Education</h1>
          {text[2].text.values.map((val, index) => (
            <EducationView key={index} eduBoard={val.eduBoard} percent={val.percent} type={val.select} />
          ))}
        </div>
        <div>
          <h1>Experience</h1>
          {text[3].text.values.map((val, index) => (
            <ExperienceView key={index} company={val.company} years={val.years} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state
  };
};

Profile = connect(mapStateToProps)(Profile);

export default Profile;
