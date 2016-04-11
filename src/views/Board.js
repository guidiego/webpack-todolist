import React from 'react';

import { Provider } from 'react-redux';
import rootStore from 'redux-base/rootStore';

import BoardTitleContainer from 'containers/BoardTitleContainer';
import BoardContainer from 'containers/BoardContainer';
import TaskModalContainer from 'containers/TaskModalContainer';

const Board = () => {
  return (
    <Provider store={rootStore}>
      <div className='container'>
        <BoardTitleContainer />
        <BoardContainer />
        <TaskModalContainer />
      </div>
    </Provider>
  );
};

export default Board;
