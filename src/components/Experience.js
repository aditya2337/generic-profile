import React, { Component } from 'react';

export default class Education extends Component {

  componentWillMount () {
    const { company, years } = this.props;
    this.state = { company, years, valid: true };
  }

  handleChange = () => {
    this.state.valid = true;
    const { company, years } = this.refs;
    let valid = true;
    if (years.value && !(/^\d+$/.test(years.value))) {
      this.setState({ valid: false });
      valid = false;
    }
    let text = {
      company: company.value,
      years: years.value,
      valid
    }

    this.setState({
      company: company.value,
      years: years.value
    })
    this.props.getExperience(text);
  }

  render () {
    const { company, years, valid } = this.state;

    return (
      <div className='mt3'>
        <fieldset>
          <input placeholder='Name of company' ref='company' value={company} type='text' onChange={this.handleChange} required />
        </fieldset>
        <fieldset>
          <input placeholder='Number of years worked' ref='years' value={years} type='text' onChange={this.handleChange} required />
          {(valid) ? <div></div> : <div className='error'>years must be in number format</div>}
        </fieldset>
      </div>
    );
  }
}
