import React, { Component, PropTypes } from 'react';

import classes from './TaskModalDescription.scss';

class TaskModalDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {editingMode: false, descriptValue: props.task.description};
    this.task = this.props.task ? this.props.task : {};
    this.handlerDescptChange = this.handlerDescptChange.bind(this);
    this.callEditMode = this.callEditMode.bind(this);
    this.saveDescription = this.saveDescription.bind(this);
  }

  callEditMode() {
    this.setState({editingMode: true});
  }

  handlerDescptChange(e) {
    this.setState({descriptValue: e.target.value});
  }

  saveDescription() {
    this.task.description = this.state.descriptValue;
    this.props.editDescription(this.task);
    this.setState({editingMode: false, descriptValue: ''});
  }

  render() {
    if (!this.state.editingMode) {
      return (
        <div onClick={this.callEditMode} className={classes['description-holder']}>
          <label className={classes['label']}>Description</label>
          <span className={classes['description']}>{this.task.description}</span>
        </div>
      );
    }

    return (
      <textarea value={this.state.descriptValue} onChange={this.handlerDescptChange}
          className={classes['description-textarea']} placeholder='Description...'
          onBlur={this.saveDescription} />
    );
  }
};

TaskModalDescription.propTypes = {
  task: PropTypes.object,
  editDescription: PropTypes.func
};

export default TaskModalDescription;
