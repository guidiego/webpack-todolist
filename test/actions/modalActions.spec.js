import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

import { openTaskModal, closeTaskModal } from 'actions/modalAction';

describe('(actions) taskAction', () => {
  it('should return correct object from "openTaskModal"', () => {
    const resultMock = {
      type: OPEN_TASK_MODAL,
      task: 'example:Task'
    };
    const result = openTaskModal(resultMock.task);

    expect(result).to.deep.eql(resultMock);
  });

  it('should return correct object from "closeTaskModal"', () => {
    const resultMock = {type: CLOSE_TAKS_MODAL};
    const result = closeTaskModal();

    expect(result).to.deep.eql(resultMock);
  });
});

export default { openTaskModal, closeTaskModal };
