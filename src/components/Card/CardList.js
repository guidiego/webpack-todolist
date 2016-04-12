import React from 'react';

import CardContainer from 'containers/CardContainer';

import classes from './CardList.scss';

const mapTaskToCard = (task) => {
  return (<CardContainer key={task.get('id')} task={task} />);
};

const CardList = ({list}) => {
  return (
    <div className={classes['card-list']}>
      {list.map(mapTaskToCard)}
    </div>
  );
};

export default CardList;
