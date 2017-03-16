import React, { Component } from 'react';

export default class PersonalView extends Component {
  render () {
    const {details} = this.props;

    return (
      <div>
        <h1>Personal Information</h1>
        <div>
          <label>Name:</label>
          {details.text.fname} {details.text.lname}
        </div>
        <div>
          <label>Father's name:</label>
          {details.text.fatherName}
        </div>
        <div>
          <label>Mother's name:</label>
          {details.text.motherName}
        </div>
        <div>
          <label>Date of Birth:</label>
          {details.text.dob}
        </div>
      </div>
    );
  }
}
