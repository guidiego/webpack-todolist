import React from 'react';

import classes from './CardTitle.scss';

const CardTitle = ({title}) => {
  return (
    <div className={classes['card-title']}>
      {title}
    </div>
  );
};

export default CardTitle;
