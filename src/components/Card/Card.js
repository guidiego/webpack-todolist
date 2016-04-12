import React, { PropTypes } from 'react';

import CardLabels from './CardLabels';
import CardTitle from './CardTitle';
import CardOptionsButton from './CardOptionsButton';
import CardDate from './CardDate';

import classes from './Card.scss';

const Card = ({task, onClick}) => {
  const haveDescriptionMark = () => {
    return task.get('description') && <i className='glyphicon glyphicon-list-alt' />;
  };

  return (
    <div onClick={onClick} className={classes.card}>
      <CardLabels labelList={task.get('labels')} />
      <CardTitle title={task.get('title')} />
      <CardOptionsButton />
      <div className={classes['card-info'] + ' row'}>
        <div className='col-sm-3'>
          {haveDescriptionMark()}
        </div>
        <div className='col-sm-9 text-right'>
          <CardDate date={task.get('date')} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  /** Card Task **/
  task: PropTypes.object.isRequired,
  /** Open Modal Dispatcher **/
  onClick: PropTypes.func.isRequired
};

export default Card;
