import React from 'react';
import sd from 'skin-deep';
import { Map, List } from 'immutable';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

import {CardContainer, mapDispatchToProps} from 'containers/CardContainer';
import Card from 'components/Card/Card';


describe('(containers) CardContainer', () => {
  let task;
  beforeEach(() => {
    task = Map({
      id: 0,
      title: 'example:title',
      description: 'example:descp'
    });
  });

  it('should return the corrected props of "mapDispatchToProps"', () => {
    const dispatchMock = sinon.spy();
    const result = mapDispatchToProps(dispatchMock, {task});

    result.openTaskModal();
    expect(dispatchMock).to.be.calledOnce;
  });

  it('should render correctly the TaskModalContainer closed', () => {
    const openTaskModal = () => {};
    const tree = sd.shallowRender(<CardContainer task={task} openTaskModal={openTaskModal} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <Card task={task} onClick={openTaskModal} />
    );
  });
});
