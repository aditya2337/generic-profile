import React, { Component } from 'react';
import Address from './Address';

export default class AddressView extends Component {

  constructor (props) {
    super(props);
    const {details} = this.props;

    this.state = {
      edit: false,
      details
    }
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  }

  handleAddress = (text) => {
    this.setState({
      details: text
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
    const {edit, details} = this.state;

    const address = (!edit) ? (
      <div>
        <h1>{details.title} Address</h1>
        <div>
          <label>Street 1:</label>
          {details.st1}
        </div>
        <div>
          <label>Street 2:</label>
          {details.st2}
        </div>
        <div>
          <label>City:</label>
            {details.city}
        </div>
        <div>
          <label>State:</label>
          {details.state}
        </div>
        <div>
          <label>Zip:</label>
          {details.zip}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    ) : (
      <form>
        <Address
          street1={details.st1}
          street2={details.st2}
          city={details.city}
          state={details.state}
          zip={details.zip}
          getAddress={this.handleAddress}
          />
        <fieldset>
          <button onClick={this.handleSubmit}>save</button>
        </fieldset>
      </form>
    );

    return address;
  }
}
