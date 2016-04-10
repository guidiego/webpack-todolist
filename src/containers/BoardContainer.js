import React from 'react';

import BoardColumn from '../components/Board/BoardColumn';

const BoardContainer = () => {
  return (
    <div className='row'>
      <BoardColumn title='TODO'/>
      <BoardColumn title='WIP'/>
      <BoardColumn title='DONE'/>
    </div>
  );
};

export default BoardContainer;
