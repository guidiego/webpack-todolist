import {
  CREATE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

export const createCard = (task) => {
  return {
    type: CREATE_CARD,
    task
  };
};

export const removeCard = (task) => {
  return {
    type: REMOVE_CARD,
    taskId: task.id
  };
};

export default { createCard, removeCard };
