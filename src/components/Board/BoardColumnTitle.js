import React, { PropTypes } from 'react';

import classes from './BoardColumnTitle.scss';

const BoardColumn = ({content}) => {
  return (
    <div className={classes['board-column-title']}>
      <h3 className='text-center'> {content} </h3>
    </div>
  );
};

BoardColumn.propTypes = {
  /** The content of Board Title **/
  content: PropTypes.string
};

BoardColumn.defaultProps = {
  content: ''
};

export default BoardColumn;
