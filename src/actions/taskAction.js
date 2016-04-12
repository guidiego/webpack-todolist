import {
  CREATE_CARD,
  UPDATE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

export const createCard = (task) => {
  return {
    type: CREATE_CARD,
    task
  };
};

export const updateCard = (id, key, value) => {
  return {
    type: UPDATE_CARD,
    id, key, value
  };
};

export const removeCard = (task) => {
  return {
    type: REMOVE_CARD,
    taskId: task.id
  };
};

export default { createCard, updateCard, removeCard };
