import React, { PropTypes, Component } from 'react';

import classes from './BoardNewCard.scss';

class BoardNewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {addCardMode: 'off', taskTitle: ''};
    this.openTaskCreator = this.openTaskCreator.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.textAreaChange = this.textAreaChange.bind(this);
  }

  openTaskCreator() {
    this.setState({addCardMode: 'on'});
  }

  submitTask(e) {
    if (e) e.preventDefault();
    let task = {id: this.props.lastId, title: this.state.taskTitle, date: new Date()};

    this.setState({taskTitle: '', addCardMode: 'off'});
    this.props.createCard(task);
  }

  textAreaChange(e) {
    if (e.target.value.match(/\n/g)) {
      this.submitTask();
    } else {
      this.setState({taskTitle: e.target.value});
    }
  }

  render() {
    if (this.state.addCardMode === 'off') {
      return (
        <button className={classes['add-card-button']} onClick={this.openTaskCreator}>
          Add a new Card...
        </button>
      );
    }

    return (
      <form onSubmit={this.submitTask} className={classes['new-card']}>
        <textarea onChange={this.textAreaChange} value={this.state.taskTitle} className={classes['textarea-card']} />
        <button type='submit' className='btn btn-success'> Add this card </button>
      </form>
    );
  }
};

BoardNewCard.propTypes = {
  lastId: PropTypes.number,
  createCard: PropTypes.func
};

export default BoardNewCard;
