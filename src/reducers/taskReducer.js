import {
  CREATE_CARD,
  UPDATE_CARD,
  MOVE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

import { Map, List } from 'immutable';

function createCard(state, task) {
  task.id = state.get('lastId');
  const setLastId = state.set('lastId', task.id + 1);
  const newList = state.get('list').push(task);
  const nextState = setLastId.set('list', newList);

  return nextState;
};

function updateCard(state, editedTask) {
  const findIndex = (task) => task.id === editedTask.id;
  const updated = (task) => {
    task = editedTask;
    return task;
  };
  const list = state.get('list');
  const updatedList = list.update(list.findIndex(findIndex), updated);
  const nextState = state.set('list', updatedList);

  return nextState;
}

function moveCard(state, {task, list}) {
  const findIndex = (_task) => _task.id === task.id;
  const updated = (task) => {
    task.status = list;
    return task;
  };
  const _list = state.get('list');
  const updatedList = _list.update(_list.findIndex(findIndex), updated);
  const nextState = state.set('list', updatedList);

  return nextState;
}

function removeCard(state, taskId) {
  const newList = state.get('list').filter(task => task.id !== taskId);
  const nextState = state.set('list', newList);

  return nextState;
};

const initialState = Map({
  lastId: 0,
  list: List()
});

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action.task);
    case UPDATE_CARD:
      return updateCard(state, action.task);
    case REMOVE_CARD:
      return removeCard(state, action.taskId);
    case MOVE_CARD:
      return moveCard(state, action);
    default:
      return state;
  }
};

export default taskReducer;
