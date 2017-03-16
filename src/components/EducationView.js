import React, { Component } from 'react';

export default class EducationView extends Component {
  render () {
    const {eduBoard, percent, type} = this.props;

    return (
      <div>
        <div>
          <label>Education Board: </label>
          {eduBoard}
        </div>
        <div>
          <label>Percent Obtained: </label>
          {percent}
        </div>
        <div>
          <label>Type of exam: </label>
            {type}
        </div>
      </div>
    );
  }
}
