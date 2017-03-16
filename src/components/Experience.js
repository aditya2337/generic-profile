import React, { Component } from 'react';

export default class Education extends Component {

  render () {
    return (
      <div className='mt3'>
        <fieldset>
          <input placeholder='Name of company' type='text' required />
        </fieldset>
        <fieldset>
          <input placeholder='Number of years worked' type='text' required />
        </fieldset>
      </div>
    );
  }
}
