import React from 'react';

import BoardColumnTitle from './BoardColumnTitle';
import CardList from 'components/Card/CardList';

import classes from './BoardColumn.scss';

const BoardColumn = ({title, items = []}) => {
  items = [
    {
      id: 0,
      title: 'Bla bla bla bla',
      labels: [
        {color: 'red', string: 'atention'}
      ],
      date: new Date(),
      description: 'meeeeeeeee'
    },
    {
      id: 1,
      title: 'Blaze',
      labels: [
        {color: 'yellow', string: 'warning'}
      ],
      date: new Date(),
      description: undefined
    }
  ];

  return (
    <div className='col-md-4'>
      <div className={classes['board-column']}>
        <BoardColumnTitle content={title} />
        <CardList list={items}/>
      </div>
    </div>
  );
};

export default BoardColumn;
