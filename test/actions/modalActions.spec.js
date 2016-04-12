import {
  OPEN_TASK_MODAL,
  CLOSE_TAKS_MODAL
} from 'constants/ActionTypes';

import { openTaskModal, closeTaskModal } from 'actions/modalAction';

describe('(actions) taskAction', () => {
  it('should return correct object from "openTaskModal"', () => {
    const resultMock = {
      type: OPEN_TASK_MODAL,
      id: 1
    };
    const result = openTaskModal(resultMock.id);

    expect(result).to.deep.eql(resultMock);
  });

  it('should return correct object from "closeTaskModal"', () => {
    const resultMock = {type: CLOSE_TAKS_MODAL};
    const result = closeTaskModal();

    expect(result).to.deep.eql(resultMock);
  });
});

export default { openTaskModal, closeTaskModal };
