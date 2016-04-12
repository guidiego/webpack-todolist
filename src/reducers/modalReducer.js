import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

import { Map } from 'immutable';

function openTaskModal(state, { id }) {
  const nextState = state.set('task', id);

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
      return openTaskModal(state, action);
    case CLOSE_TAKS_MODAL:
      return closeTaskModal(state);
    default:
      return state;
  }
};

export default modalReducer;
