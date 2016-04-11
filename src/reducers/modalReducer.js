import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

import { Map } from 'immutable';

function openTaskModal(state, task) {
  const nextState = state.set('task', task);

  return nextState;
};

function closeTaskModal(state) {
  const nextState = state.set('task', undefined);

  return nextState;
};

const initialState = Map({
  task: undefined
});

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TASK_MODAL:
      return openTaskModal(state, action.task);
    case CLOSE_TAKS_MODAL:
      return closeTaskModal(state);
    default:
      return state;
  }
};

export default modalReducer;
