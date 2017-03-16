import React, { Component } from 'react';

export default class Education extends Component {

  handleChange = () => {
    const { select, eduBoard, percent } = this.refs;
    let text = {
      select: select.value,
      eduBoard: eduBoard.value,
      percent: percent.value
    }
    this.props.getEducation(text);
  }

  render () {
    return (
      <div className='mt3'>
        <fieldset>
          <select required ref='select' onChange={this.handleChange}>
            <option value='volvo'>--Type of exam--</option>
            <option value='CBSE'>CBSE</option>
            <option value='ICSE'>ICSE</option>
            <option value='BTech'>BTech</option>
          </select>
        </fieldset>
        <fieldset>
          <input placeholder='Education board' ref='eduBoard' onChange={this.handleChange} type='text' required />
        </fieldset>
        <fieldset>
          <input placeholder='Percentage Obtained' ref='percent' onChange={this.handleChange} type='text' required />
        </fieldset>
      </div>
    );
  }
}
