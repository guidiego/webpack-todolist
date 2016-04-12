import React, {PropTypes} from 'react';

import { List } from 'immutable';
import { connect } from 'react-redux';

import BoardColumn from '../components/Board/BoardColumn';

export const mapStateToProps = (state) => {
  const list = state.getIn(['task', 'list'], List());
  const todo = list.filter(task => task.get('status') === 'todo');
  const wip = list.filter(task => task.get('status') === 'wip');
  const done = list.filter(task => task.get('status') === 'done');

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

BoardContainer.propTypes = {
  todo: PropTypes.instanceOf(List),
  wip: PropTypes.instanceOf(List),
  done: PropTypes.instanceOf(List)
};

export default connect(
  mapStateToProps,
  null
)(BoardContainer);
