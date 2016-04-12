import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

export const openTaskModal = (id) => {
  return {
    type: OPEN_TASK_MODAL,
    id
  };
};

export const closeTaskModal = () => {
  return {
    type: CLOSE_TAKS_MODAL
  };
};

export default { openTaskModal, closeTaskModal };
