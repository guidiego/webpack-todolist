import React from 'react';

import { Provider } from 'react-redux';
import rootStore from 'redux-base/rootStore';

import BoardContainer from 'containers/BoardContainer';
import TaskModalContainer from 'containers/TaskModalContainer';

import classes from './Board.scss';

const Board = () => {
  return (
    <Provider store={rootStore}>
      <div className={classes.board + ' container'}>
        <BoardContainer />
        <TaskModalContainer />
      </div>
    </Provider>
  );
};

export default Board;
