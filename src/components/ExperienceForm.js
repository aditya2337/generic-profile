import React, { Component } from 'react';
import Experience from './Experience';
import {  Redirect } from 'react-router-dom';
import { submitExperience } from '../store/actions';
import { connect } from 'react-redux';

class ExperienceForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      noOfFields: 0,
      fieldsets: [],
      nextForm: false,
      text: []
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
    fieldsets.pop()
    text.pop()
    this.setState({
      fieldsets: fieldsets,
      noOfFields,
      text
    })
  }

  handleExperience = (values) => {
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
    dispatch(submitExperience(values));
    this.setState({
      nextForm: true
    })
  }

  render () {
    const { fieldsets, nextForm } = this.state;
    const ExperienceFields = fieldsets.map((val, index) =>
    <div className='bt'>
      <Experience key={index} getExperience={this.handleExperience} />
    </div>);
    const cancelButton = (fieldsets.length > 0) ?
    <button type='button' className='fr' onClick={this.onCancelBtnClick}>Cancel</button> :
      <div></div>;

    if (nextForm) {
      return (
        <Redirect to='/profile' />
      )
    }

    return (
      <form id='contact' className='vw-50' method='post' onSubmit={this.handleSubmit}>
        <fieldset>
          <h2>Experience</h2>
        </fieldset>
        <Experience getExperience={this.handleExperience} />
        {ExperienceFields}
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

ExperienceForm = connect(mapStateToProps)(ExperienceForm);

export default ExperienceForm;
