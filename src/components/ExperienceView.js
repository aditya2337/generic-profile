import React, { Component } from 'react';
import Experience from './Experience';

export default class ExperienceView extends Component {
  constructor (props) {
    super(props);

    const {company, years} = this.props;
    this.state = {
      edit: false,
      company,
      years
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  }

  handleExperience = (values) => {
    this.setState({
      company: values.company,
      years: values.years
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.onEditChange()
    this.setState({
      edit: false
    })
  }

  render () {
    const {company, years, edit} = this.state;

    const experience = (edit)
    ? (
      <form onSubmit={this.handleSubmit}>
        <Experience
          company={company}
          years={years}
          getExperience={this.handleExperience}
          />
        <fieldset>
          <button onClick={this.handleSubmit}>save</button>
        </fieldset>
      </form>
    ) : (
      <div>
        <div>
          <label>Company: </label>
          {company}
        </div>
        <div>
          <label>Years: </label>
          {years}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );

    return experience;
  }
}
