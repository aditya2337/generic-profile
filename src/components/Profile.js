import React, { Component } from 'react';
import { connect } from 'react-redux';
import PersonalView from './PersonalView';
import AddressView from './AddressView';
import EducationView from './EducationView';
import ExperienceView from './ExperienceView';

class Profile extends Component {
  render () {
    const { text } = this.props;

    if (text.length < 4) {
      return (
        <div id='contact' className='vw-50'>
          Please go back and fill in your details to see this page.
        </div>
      );
    }

    return (
      <div id='contact' className='vw-50'>
        <PersonalView details={text[0]} />
        <AddressView details={text[1].text.permanentAddr} />
        <AddressView details={text[1].text.presentAddr} />
        <div>
          <h2>Education</h2>
          {text[2].text.values.map((val) => (
            <EducationView board={val.eduBoard} percent={val.percent} type={val.select} />
          ))}
        </div>
        <div>
          <h2>Experience</h2>
          {text[3].text.values.map((val) => (
            <ExperienceView company={val.company} years={val.years} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {text} = state;
  return {
    text: state
  };
};

Profile = connect(mapStateToProps)(Profile);

export default Profile;
