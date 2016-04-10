import React from 'react';

import BoardTitleContainer from '../containers/BoardTitleContainer';
import BoardContainer from '../containers/BoardContainer';

const Board = () => {
  return (
    <div className='container'>
      <BoardTitleContainer />
      <BoardContainer />
    </div>
  );
};

export default Board;
