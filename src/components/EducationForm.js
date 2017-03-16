import React, { Component } from 'react';
import Education from './Education';
import {  Redirect } from 'react-router-dom';
import { submitEducation } from '../store/actions';
import { connect } from 'react-redux';

class EducationForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      noOfFields: 0,
      fieldsets: [],
      nextForm: false,
      text:[]
    };
  }

  onAddBtnClick = (e) => {
    let { fieldsets, noOfFields } = this.state;
    noOfFields++;
    this.setState({
      fieldsets: fieldsets.concat(noOfFields),
      noOfFields
    })
  }

  onCancelBtnClick = (e) => {
    let { fieldsets, noOfFields, text } = this.state;
    noOfFields--;
    fieldsets.pop();
    text.pop();
    this.setState({
      fieldsets,
      noOfFields,
      text
    })
  }

  handleEducation = (values) => {
    let { noOfFields, text } = this.state;
    text[noOfFields] = values;
    this.setState({
      text
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch } = this.props;
    const values = {
      values: text
    }
    dispatch(submitEducation(values));
    this.setState({
      nextForm: true
    })
  }

  render () {
    const { fieldsets, nextForm } = this.state;
    const EducationFields = fieldsets.map((val, index) =>
    <div className='bt'>
      <Education key={index} getEducation={this.handleEducation} />
    </div>);
    const cancelButton = (fieldsets.length > 0) ?
    <button type='button' className='fr' onClick={this.onCancelBtnClick}>Cancel</button> :
      <div></div>;

    if (nextForm) {
      return (
        <Redirect to='/experience' />
      )
    }

    return (
      <form id='contact' className='vw-50' method='post' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>Education</h2>
        </fieldset>
        <Education getEducation={this.handleEducation} />
        {EducationFields}
        <fieldset>
          <button type='button' onClick={this.onAddBtnClick}>Add</button>
          {cancelButton}
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
  };
};

EducationForm = connect(mapStateToProps)(EducationForm);

export default EducationForm;
