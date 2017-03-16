import React, { Component } from 'react';
import PersonalForm from './PersonalForm';

export default class PersonalView extends Component {
  constructor (props) {
    super(props);

    const { details } = this.props;
    this.state = {
      edit: false,
      details: details.text
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  }

  handleSubmit = (text) => {
    this.setState({
      details: text,
      edit: false
    })
  }

  render () {
    const { edit, details } = this.state;

    const address = (edit) ? (
      <PersonalForm
        fname={details.fname}
        lname={details.lname}
        fatherName={details.fatherName}
        motherName={details.motherName}
        dob={details.dob}
        onSubmission={this.handleSubmit}
        />
    ) : (
      <div>
        <h1>Personal Information</h1>
        <div>
          <label>Name:</label>
          {details.fname} {details.lname}
        </div>
        <div>
          <label>Father's name:</label>
          {details.fatherName}
        </div>
        <div>
          <label>Mother's name:</label>
          {details.motherName}
        </div>
        <div>
          <label>Date of Birth:</label>
          {details.dob}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );

    return address;
  }
}
