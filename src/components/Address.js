import React, { Component } from 'react';

export default class AddressForm extends Component {

  handleChange = () => {
    const { st1, st2, city, state, zip } = this.refs;
    const { addrTitle } = this.props;

    let text = {
      title: addrTitle,
      st1: st1.value,
      st2: st2.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    }
    this.props.getAddress(text);
  }

  render () {
    return (
      <div>
        <fieldset>
          <h2>{this.props.addrTitle} Adress</h2>
        </fieldset>
        <fieldset>
          <input placeholder='Street 1' type='text' ref='st1' onChange={this.handleChange} required />
          <input placeholder='Street 2' type='text' ref='st2' onChange={this.handleChange} required />
        </fieldset>
        <fieldset>
          <input placeholder='City' type='text' ref='city' onChange={this.handleChange} required />
        </fieldset>
        <fieldset>
          <input placeholder='State' type='text' ref='state' onChange={this.handleChange} required />
        </fieldset>
        <fieldset>
          <input placeholder='zip code' type='text' ref='zip' onChange={this.handleChange} required />
        </fieldset>
      </div>
    );
  }
}
