import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

export const openTaskModal = (task) => {
  return {
    type: OPEN_TASK_MODAL,
    task
  };
};

export const closeTaskModal = () => {
  return {
    type: CLOSE_TAKS_MODAL
  };
};

export default { openTaskModal, closeTaskModal };
