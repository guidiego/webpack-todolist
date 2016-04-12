import React from 'react';
import sd from 'skin-deep';
import { Map, List } from 'immutable';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

import {BoardAddCardContainer, mapDispatchToProps, mapStateToProps} from 'containers/BoardAddCardContainer';
import BoardNewCard from 'components/Board/BoardNewCard';

describe('(containers) BoardAddCardContainer', () => {
  it('should return the corrected props for "mapStateToProps"', () => {
    const task = {
      lastId: 0,
      list: List()
    };
    const state = Map({
      task : Map(task)
    });

    const result = mapStateToProps(state);
    expect(result).to.have.property('lastId', 0);
    expect(result).to.not.have.property('list');
  });

  it('should return the corrected props for "mapDispatchToProps"', () => {
    const dispatchMock = sinon.spy();
    const list = 'example';
    const result = mapDispatchToProps(dispatchMock, {list});

    result.createCard({});
    expect(dispatchMock).to.be.calledOnce;
  });

  it('should render correctly the BoardAddCardContainer', () => {
    const lastId = 0;
    const createCard = () => {};
    const tree = sd.shallowRender(<BoardAddCardContainer lastId={lastId} createCard={createCard}/>);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <BoardNewCard lastId={lastId} createCard={createCard}/>
    );
  });
});
