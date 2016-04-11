import React, { Component, PropTypes } from 'react';

import classes from './TaskModalTitle.scss';

class TaskModalTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {editingMode: false, titleValue: props.task.title};
    this.task = this.props.task ? this.props.task : {};
    this.handlerDescptChange = this.handlerDescptChange.bind(this);
    this.callEditMode = this.callEditMode.bind(this);
    this.saveDescription = this.saveDescription.bind(this);
  }

  callEditMode() {
    this.setState({editingMode: true});
  }

  handlerDescptChange(e) {
    this.setState({titleValue: e.target.value});
  }

  saveDescription() {
    this.task.title = this.state.titleValue;
    this.props.editTitle(this.task);
    this.setState({editingMode: false, titleValue: ''});
  }

  render() {
    if (!this.state.editingMode) {
      return (
        <div onClick={this.callEditMode} className={classes['title-holder']}>
          {this.task.title}
        </div>
      );
    }

    return (
      <input value={this.state.titleValue} onChange={this.handlerDescptChange}
          className={classes['title-input']} placeholder='Title...'
          onBlur={this.saveDescription} />
    );
  }
};

TaskModalTitle.propTypes = {
  task: PropTypes.object,
  editTitle: PropTypes.func
};

export default TaskModalTitle;
