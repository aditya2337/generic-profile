import React, { Component } from 'react';

export default class AddressView extends Component {
  render () {
    const {details} = this.props;

    return (
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
      </div>
    );
  }
}
