import React, { Component } from 'react';

export default class Personal extends Component {

  _onFocus = (e) => {
    e.currentTarget.type = "date";
  }

  _onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Date of Birth  ";
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert('yay');
  }

  render () {
    return (
      <div className='flex items-center justify-center mt3'>
        <div class='container'>
          <form id='contact' className='vw-50' method='post' onSubmit={this.handleSubmit}>
            <fieldset>
              <input placeholder='First name' type='text' tabindex='1' required autofocus />
            </fieldset>
            <fieldset>
              <input placeholder='Last name' type='text' tabindex='2' required autofocus />
            </fieldset>
            <fieldset>
              <input placeholder='Father name' type='text' tabindex='3' required />
            </fieldset>
            <fieldset>
              <input placeholder='Mother name' type='text' tabindex='4' required />
            </fieldset>
            <fieldset>
              <input placeholder='Date of birth' type='text' onFocus={this._onFocus} onBlur={this._onBlur} tabindex='5' required />
            </fieldset>
            <fieldset>
              <button name='submit' type='submit' id='contact-submit' data-submit='...Sending'>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
