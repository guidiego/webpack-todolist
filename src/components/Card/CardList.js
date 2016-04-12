import React, { PropTypes } from 'react';

import CardContainer from 'containers/CardContainer';
import { List } from 'immutable';

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

CardList.propTypes = {
  list: PropTypes.instanceOf(List)
};

export default CardList;
