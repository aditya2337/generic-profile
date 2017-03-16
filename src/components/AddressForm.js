import React, { Component } from 'react';
import Address from './Address';
import {  Redirect } from 'react-router-dom';

export default class AddressForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nextForm : false,
      text: {
        presentAddr: null,
        permanentAddr: null
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      nextForm: true
    })
  }

  handleAddress = (text) => {
    if (text.addr === 'Present') {
      console.log(this.state);
      // this.setState({ text.presentAddr: text })
    }
  }

  render () {
    const { nextForm } = this.state;
    if (nextForm) {
      return (
        <Redirect to='/education' />
      )
    }

    return (
      <form id='contact' className='vw-50' method='post' onSubmit={this.handleSubmit}>
        <Address addrTitle='Present' getAddress={this.handleAddress} />
        <Address addrTitle='Permanent' />
        <fieldset>
          <button name='submit' type='submit' id='contact-submit' data-submit='...Sending'>Submit</button>
        </fieldset>
      </form>
    );
  }
}
