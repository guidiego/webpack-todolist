import React from 'react';

import CardLabels from './CardLabels';
import CardTitle from './CardTitle';
import CardOptionsButton from './CardOptionsButton';
import CardDate from './CardDate';

import classes from './Card.scss';

const Card = ({task, onClick}) => {
  const haveDescriptionMark = () => {
    return task.description && <i className='glyphicon glyphicon-list-alt' />;
  };

  return (
    <div onClick={onClick} className={classes.card}>
      <CardLabels labelList={task.labels} />
      <CardTitle title={task.title} />
      <CardOptionsButton />
      <div className={classes['card-info'] + ' row'}>
        <div className='col-sm-3'>
          {haveDescriptionMark()}
        </div>
        <div className='col-sm-9 text-right'>
          <CardDate date={task.date} />
        </div>
      </div>
    </div>
  );
};

export default Card;
