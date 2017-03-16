import React, { Component } from 'react';
import Address from './Address';
import {  Redirect } from 'react-router-dom';
import { submitAddress } from '../store/actions';
import { connect } from 'react-redux';

class AddressForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      nextForm : false,
      presentAddr: null,
      permanentAddr: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { permanentAddr, presentAddr } = this.state;
    const { dispatch } = this.props;
    const text = { permanentAddr, presentAddr };
    if (permanentAddr.valid && presentAddr.valid) {
      dispatch(submitAddress(text));
      this.setState({
        nextForm: true
      })
    }
  }

  handleAddress = (text) => {
    if (text.title === 'Present') {
      this.setState({
        presentAddr: text
      })
    }
    if (text.title === 'Permanent') {
      this.setState({
        permanentAddr: text
      })
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
        <Address addrTitle='Permanent' getAddress={this.handleAddress} />
        <fieldset>
          <button name='submit' type='submit' id='contact-submit' data-submit='...Sending'>Submit</button>
        </fieldset>
      </form>
    );
  }
}


const mapStateToProps = state => {
  return {
    text: state
  };
};

AddressForm = connect(mapStateToProps)(AddressForm);

export default AddressForm;
