import {
  CREATE_CARD,
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

function removeCard(state, taskId) {
  return state.list.filter(id => id !== taskId);
};

const initialState = Map({
  lastId: 0,
  list: List()
});

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return createCard(state, action.task);
    case REMOVE_CARD:
      return removeCard(state, action.taskId);
    default:
      return state;
  }
};

export default taskReducer;
