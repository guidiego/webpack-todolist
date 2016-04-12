import React, { Component, PropTypes } from 'react';

import classes from './TaskModalTitle.scss';

class TaskModalTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {editingMode: false, titleValue: props.value};
    this.handlerDescptChange = this.handlerDescptChange.bind(this);
    this.callEditMode = this.callEditMode.bind(this);
    this.saveDescription = this.saveDescription.bind(this);
  }

  callEditMode() {
    this.setState({editingMode: true});
  }

  handlerDescptChange(e) {
    if (e.target.value.match(/\n/g)) {
      this.saveDescription();
    } else {
      this.setState({titleValue: e.target.value});
    }
  }

  saveDescription(e) {
    if (e) e.preventDefault();
    const title = this.state.titleValue;
    const {id} = this.props;

    this.props.editTask(id, 'title', title);
    this.setState({editingMode: false, titleValue: ''});
  }

  render() {
    if (!this.state.editingMode) {
      return (
        <div onClick={this.callEditMode} className={classes['title-holder']}>
          {this.props.value}
        </div>
      );
    }

    return (
      <form onSubmit={this.saveDescription}>
        <input value={this.state.titleValue} onChange={this.handlerDescptChange}
            className={classes['title-input']} placeholder='Title...' />
      </form>
    );
  }
};

TaskModalTitle.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  editTask: PropTypes.func
};

export default TaskModalTitle;
