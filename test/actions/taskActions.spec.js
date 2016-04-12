import {
  CREATE_CARD,
  REMOVE_CARD
} from 'constants/ActionTypes';

import { createCard, removeCard } from 'actions/taskAction';

describe('(actions) taskAction', () => {
  it('should return correct object from "createCard"', () => {
    const resultMock = {
      type: CREATE_CARD,
      task: 'example:Task'
    };
    const result = createCard(resultMock.task);

    expect(result).to.deep.eql(resultMock);
  });

  it('should return correct object from "removeCard"', () => {
    const resultMock = {
      type: REMOVE_CARD,
      taskId: 0
    };
    const result = removeCard(resultMock.taskId);

    expect(result).to.deep.eql(resultMock);
  });
});
