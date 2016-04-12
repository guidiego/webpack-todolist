import {
  CREATE_CARD,
  UPDATE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

import { Map, List } from 'immutable';

import TaskModel from 'models/TaskModel';

function createCard(state, task) {
  task.id = state.get('lastId');
  const setLastId = state.set('lastId', task.id + 1);
  const newList = state.get('list').push(new TaskModel(task));
  const nextState = setLastId.set('list', newList);

  return nextState;
};

function updateCard(state, { id, key, value }) {
  const findIndex = (task) => task.id === id;
  const updated = (task) => {
    const newTask = task.set(key, value);
    return newTask;
  };
  const list = state.get('list');
  const updatedList = list.update(list.findIndex(findIndex), updated);
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
      return updateCard(state, action);
    case REMOVE_CARD:
      return removeCard(state, action.taskId);
    default:
      return state;
  }
};

export default taskReducer;
