import React, { PropTypes } from 'react';

import classes from './CardTitle.scss';

const CardTitle = ({title}) => {
  return (
    <div className={classes['card-title']}>
      {title}
    </div>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string
};

export default CardTitle;
