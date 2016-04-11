import React from 'react';

import { connect } from 'react-redux';

import BoardColumn from '../components/Board/BoardColumn';

export const mapStateToProps = ({task}) => {
  const todo = task.get('list').filter(task => task.status === 'todo');
  const wip = task.get('list').filter(task => task.status === 'wip');
  const done = task.get('list').filter(task => task.status === 'done');

  return { todo, wip, done };
};

export const BoardContainer = ({ todo, wip, done }) => {
  return (
    <div className='row'>
      <BoardColumn title='TODO' items={todo}/>
      <BoardColumn title='WIP' items={wip}/>
      <BoardColumn title='DONE' items={done}/>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(BoardContainer);
