import React from 'react';

import BoardColumnTitle from './BoardColumnTitle';
import CardList from 'components/Card/CardList';

import BoardAddCardContainer from 'containers/BoardAddCardContainer';

import { List } from 'immutable';

import classes from './BoardColumn.scss';

const BoardColumn = ({title, items = List()}) => {
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

export default BoardColumn;
