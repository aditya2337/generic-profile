import React, { Component } from 'react';
import {  Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPersonal } from '../store/actions';

class PersonalForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nextForm : false
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
    dispatch(submitPersonal(text));

    this.setState({
      nextForm: true
    })
  }

  render () {
    const { nextForm } = this.state;
    if (nextForm) {
      return (
        <Redirect to='/address' />
      )
    }

    return (
      <form id='contact' className='vw-50' method='post' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>Personal Information</h2>
        </fieldset>
        <fieldset>
          <input placeholder='First name' type='text' ref='fname' required />
        </fieldset>
        <fieldset>
          <input placeholder='Last name' type='text' ref='lname' required />
        </fieldset>
        <fieldset>
          <input placeholder='Father name' type='text' ref='fatherName' required />
        </fieldset>
        <fieldset>
          <input placeholder='Mother name' type='text' ref='motherName' required />
        </fieldset>
        <fieldset>
          <input placeholder='Date of birth' type='text' ref='dob' onFocus={this._onFocus} onBlur={this._onBlur} required />
        </fieldset>
        <fieldset>
          <button name='submit' type='submit' id='contact-submit' data-submit='...Sending'>Submit</button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const {text} = state;
  return {
    text: state
  }
}

PersonalForm = connect(mapStateToProps)(PersonalForm);

export default PersonalForm;
