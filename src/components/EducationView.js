import React, { Component } from 'react';
import Education from './Education';

export default class EducationView extends Component {
  constructor (props) {
    super(props);

    const {eduBoard, percent, type} = this.props;
    this.state = {
      edit: false,
      eduBoard,
      percent,
      type
    };
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  }

  handleEducation = (values) => {
    this.setState({
      eduBoard: values.eduBoard,
      percent: values.percent,
      type: values.select
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
    const {eduBoard, percent, type, edit} = this.state;

    const education = (edit)
    ? (
      <form onSubmit={this.handleSubmit}>
        <Education
          eduBoard={eduBoard}
          percent={percent}
          type={type}
          getEducation={this.handleEducation}
          />
        <fieldset>
          <button onClick={this.handleSubmit}>save</button>
        </fieldset>
      </form>
    ) : (
      <div>
        <div>
          <label>Education Board: </label>
          {eduBoard}
        </div>
        <div>
          <label>Percent Obtained: </label>
          {percent}
        </div>
        <div>
          <label>Type of exam: </label>
          {type}
        </div>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );

    return education;
  }
}
