import React, { Component } from 'react';

export default class AddressForm extends Component {

  constructor (props) {
    super(props);
    const { street1, street2, city, state, zip } = this.props;
    this.state = { street1, street2, city, state, zip, valid: true }
  }

  handleChange = () => {
    this.state.valid = true;
    const { st1, st2, city, state, zip } = this.refs;
    const { addrTitle } = this.props;
    let valid = true;
    if (zip.value && !(/^\d+$/.test(zip.value))) {
      this.setState({ valid: false });
      valid = false;
    }

    let text = {
      title: addrTitle,
      st1: st1.value,
      st2: st2.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      valid
    }

    this.setState({
      street1: st1.value,
      street2: st2.value,
      city: city.value,
      state: state.value,
      zip: zip.value
    })
    this.props.getAddress(text);
  }

  render () {
    const { street1, street2, city, state, zip, valid } = this.state;

    return (
      <div>
        <fieldset>
          <h2>{this.props.addrTitle} Adress</h2>
        </fieldset>
        <fieldset>
          <input placeholder='Street 1' type='text' ref='st1' onChange={this.handleChange} value={street1} required />
          <input placeholder='Street 2' type='text' ref='st2' onChange={this.handleChange} value={street2} required />
        </fieldset>
        <fieldset>
          <input placeholder='City' type='text' ref='city' onChange={this.handleChange} value={city} required />
        </fieldset>
        <fieldset>
          <input placeholder='State' type='text' ref='state' onChange={this.handleChange} value={state} required />
        </fieldset>
        <fieldset>
          <input placeholder='zip code' type='text' ref='zip' onChange={this.handleChange} value={zip} required />
          {(valid) ? <div></div> : <div className='error'>zip should be a type of a number</div>}
        </fieldset>
      </div>
    );
  }
}
