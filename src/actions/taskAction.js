import {
  CREATE_CARD,
  UPDATE_CARD,
  MOVE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

export const createCard = (task) => {
  return {
    type: CREATE_CARD,
    task
  };
};

export const updateCard = (task) => {
  return {
    type: UPDATE_CARD,
    task
  };
};

export const removeCard = (task) => {
  return {
    type: REMOVE_CARD,
    taskId: task.id
  };
};

export const moveCard = (task, list) => {
  return {
    type: MOVE_CARD,
    task,
    list
  };
};

export default { createCard, updateCard, removeCard, moveCard };
