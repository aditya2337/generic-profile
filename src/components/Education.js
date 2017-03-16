import React, { Component } from 'react';

export default class Education extends Component {

  componentWillMount () {
    const { eduBoard, type, percent } = this.props;
    this.state = { eduBoard, type, percent, valid: true };
  }

  handleChange = () => {
    this.state.valid = true;
    const { select, eduBoard, percent } = this.refs;
    let valid = true;
    if (percent.value && !(/^\d+$/.test(percent.value)) || percent.value >= 101) {
      this.setState({ valid: false });
      valid = false;
    }
    let text = {
      select: select.value,
      eduBoard: eduBoard.value,
      percent: percent.value,
      valid
    }

    this.setState({
      select: select.value,
      eduBoard: eduBoard.value,
      percent: percent.value
    });

    this.props.getEducation(text);
  }

  render () {
    const { eduBoard, percent, valid } = this.state;
    return (
      <div className='mt3'>
        <fieldset>
          <select required ref='select' onChange={this.handleChange}>
            <option value='dummy'>--Type of exam--</option>
            <option value='CBSE'>CBSE</option>
            <option value='ICSE'>ICSE</option>
            <option value='BTech'>BTech</option>
          </select>
        </fieldset>
        <fieldset>
          <input placeholder='Education board' ref='eduBoard' value={eduBoard} onChange={this.handleChange} type='text' required />
        </fieldset>
        <fieldset>
          <input placeholder='Percentage Obtained' ref='percent' value={percent} onChange={this.handleChange} type='text' required />
          {(valid) ? <div></div> : <div className='error'>please submit a valid percent(between 1-100)</div>}
        </fieldset>
      </div>
    );
  }
}
