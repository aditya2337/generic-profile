import React, { Component } from 'react';

export default class Education extends Component {

  handleChange = () => {
    const { company, years } = this.refs;
    let text = {
      company: company.value,
      years: years.value
    }
    this.props.getExperience(text);
  }

  render () {
    return (
      <div className='mt3'>
        <fieldset>
          <input placeholder='Name of company' ref='company' type='text' onChange={this.handleChange} required />
        </fieldset>
        <fieldset>
          <input placeholder='Number of years worked' ref='years' type='text' onChange={this.handleChange} required />
        </fieldset>
      </div>
    );
  }
}
