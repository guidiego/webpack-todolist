import React from 'react';

import classes from './CardOptionsButton.scss';

const CardOptionsButton = () => {
  return (
    <button className={classes['option-button']}>
      <i className='glyphicon glyphicon-cog' />
    </button>
  );
};

export default CardOptionsButton;
