import React, { Component } from 'react';

import classes from './BoardNewCard.scss';

class BoardNewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {addCardMode: 'off'};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({addCardMode: 'on'});
  }

  render() {
    if (this.state.addCardMode === 'off') {
      return (
        <button className={classes['add-card-button']} onClick={this.onClick}>
          Add a new Card...
        </button>
      );
    }

    return (
      <div className={classes['new-card']} onClick={this.onClick}>
        <textarea className={classes['textarea-card']} />
        <button className='btn btn-success'> Add this card </button>
      </div>
    );
  }
};

export default BoardNewCard;
