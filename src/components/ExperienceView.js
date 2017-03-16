import React, { Component } from 'react';

export default class ExperienceView extends Component {
  render () {
    const {company, years} = this.props;

    return (
      <div>
        <div>
          <label>Company: </label>
          {company}
        </div>
        <div>
          <label>Years: </label>
          {years}
        </div>
      </div>
    );
  }
}
