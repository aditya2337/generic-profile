import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPersonal } from '../store/actions';

class PersonalForm extends Component {

  constructor (props) {
    super(props);
    const { fname, lname, fatherName, motherName, dob } = this.props;
    this.state = {
      nextForm : false,
      fname,
      lname,
      fatherName,
      motherName,
      dob,
      width: ''
    }
  }

  _onFocus = (e) => {
    e.currentTarget.type = "date";
  }

  _onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Date of Birth  ";
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { fname, lname, fatherName, motherName, dob } = this.refs;
    const { dispatch } = this.props;

    const text = {
      fname: fname.value,
      lname: lname.value,
      fatherName: fatherName.value,
      motherName: motherName.value,
      dob: dob.value
    }
    if (this.props.onSubmission) {
      this.props.onSubmission(text);
    } else {
      dispatch(submitPersonal(text));
      this.setState({
        nextForm: true
      })
    }
  }

  handleChange = () => {
    const { fname, lname, fatherName, motherName, dob } = this.refs;
    this.setState({
      fname: fname.value,
      lname: lname.value,
      fatherName: fatherName.value,
      motherName: motherName.value,
      dob: dob.value
    })
  }

  render () {
    const { nextForm } = this.state;
    const id = (this.props.onSubmission) ? '' : 'contact';
    const width = (this.props.onSubmission) ? '' : 'vw-50';
    const button = (this.props.onSubmission) ?
      <button onClick={this.handleSubmit}>save</button>
      :
      <button name='submit' type='submit' id='contact-submit' data-submit='...Sending'>Submit</button>;

    if (nextForm) {
      return (
        <Redirect to='/address' />
      )
    }
    const { fname, lname, fatherName, motherName, dob } = this.state;

    return (
      <form id={id} className={width} method='post' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>Personal Information</h2>
        </fieldset>
        <fieldset>
          <input placeholder='First name' type='text' ref='fname' onChange={this.handleChange} value={fname} required />
        </fieldset>
        <fieldset>
          <input placeholder='Last name' type='text' ref='lname' onChange={this.handleChange} value={lname} required />
        </fieldset>
        <fieldset>
          <input placeholder='Father name' type='text' ref='fatherName' onChange={this.handleChange} value={fatherName} required />
        </fieldset>
        <fieldset>
          <input placeholder='Mother name' type='text' ref='motherName' onChange={this.handleChange} value={motherName} required />
        </fieldset>
        <fieldset>
          <input placeholder='Date of birth' type='text' ref='dob' onChange={this.handleChange} value={dob} onFocus={this._onFocus} onBlur={this._onBlur} required />
        </fieldset>
        <fieldset>
          {button}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state
  }
}

PersonalForm = connect(mapStateToProps)(PersonalForm);

export default PersonalForm;
