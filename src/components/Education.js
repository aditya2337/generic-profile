import React, { Component } from 'react';

export default class Education extends Component {

  render () {
    return (
      <div className='mt3'>
        <fieldset>
          <select required>
            <option value='volvo'>--Type of exam--</option>
            <option value='saab'>CBSE</option>
            <option value='mercedes'>ICSE</option>
            <option value='audi'>BTech</option>
          </select>
        </fieldset>
        <fieldset>
          <input placeholder='Education board' type='text' required />
        </fieldset>
        <fieldset>
          <input placeholder='Percentage Obtained' type='text' required />
        </fieldset>
      </div>
    );
  }
}
