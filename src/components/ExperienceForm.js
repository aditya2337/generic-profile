import React, { Component } from 'react';
import Experience from './Experience';
import {  Redirect } from 'react-router-dom';

export default class ExperienceForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      noOfFields: 0,
      fieldsets: [],
      nextForm: false
    };
  }

  onAddBtnClick = (e) => {
    let { fieldsets, noOfFields } = this.state;
    noOfFields++;
    this.setState({
      fieldsets: fieldsets.concat(noOfFields)
    })
  }

  onCancelBtnClick = (e) => {
    let { fieldsets, noOfFields } = this.state;
    noOfFields--;
    fieldsets.pop()
    this.setState({
      fieldsets: fieldsets
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      nextForm: true
    })
  }

  render () {
    const { fieldsets, nextForm } = this.state;
    const ExperienceFields = fieldsets.map((val, index) => <div className='bt'><Experience key={index} /></div>);
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
        <Experience />
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
