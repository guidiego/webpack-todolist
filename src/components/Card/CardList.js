import React from 'react';

import Card from './Card';

import classes from './CardList.scss';

const mapTaskToCard = (task) => {
  return (<Card key={task.id} task={task} />);
};

const CardList = ({list}) => {
  return (
    <div className={classes['card-list']}>
      {list.map(mapTaskToCard)}
    </div>
  );
};

export default CardList;
