import React, { PropTypes } from 'react';

import BoardColumnTitle from './BoardColumnTitle';
import CardList from 'components/Card/CardList';

import BoardAddCardContainer from 'containers/BoardAddCardContainer';

import { List } from 'immutable';

import classes from './BoardColumn.scss';

const BoardColumn = ({title, items}) => {
  return (
    <div className='col-md-4'>
      <div className={classes['board-column']}>
        <BoardColumnTitle content={title} />
        <CardList list={items}/>
        <BoardAddCardContainer list={title.toLowerCase()} />
      </div>
    </div>
  );
};

BoardColumn.propTypes = {
  /** Column Title **/
  title: PropTypes.string,
  /** A Immutable List of tasks **/
  items: PropTypes.object
};

BoardColumn.defaultProps = {
  title: '',
  items: List()
};

export default BoardColumn;
