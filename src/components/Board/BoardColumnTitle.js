import React from 'react';

import classes from './BoardColumnTitle.scss';

const BoardColumn = ({content}) => {
  return (
    <div className={classes['board-column-title']}>
      <h3 className='text-center'> {content} </h3>
    </div>
  );
};

export default BoardColumn;
