import React, { Component, PropTypes } from 'react';

import classes from './TaskModalDescription.scss';

class TaskModalDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {editingMode: false, descriptValue: props.value};
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
    const description = this.state.descriptValue;
    const { id } = this.props
    this.props.editTask(id, 'description', description);
    this.setState({editingMode: false, descriptValue: ''});
  }

  render() {
    if (!this.state.editingMode) {
      return (
        <div onClick={this.callEditMode} className={classes['description-holder']}>
          <label className={classes['label']}>Description</label>
          <span className={classes['description']}>{this.props.value}</span>
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
  id: PropTypes.number,
  value: PropTypes.string,
  editDescription: PropTypes.func
};

export default TaskModalDescription;
