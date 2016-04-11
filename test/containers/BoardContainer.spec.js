import React from 'react';
import sd from 'skin-deep';
import { Map, List } from 'immutable';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

import {BoardContainer, mapStateToProps} from 'containers/BoardContainer';
import BoardColumn from 'components/Board/BoardColumn';

describe('(containers) BoardContainer', () => {
  it('should return the corrected pros pro "mapStateToProps"', () => {
    const task = Map({
      lastId:0,
      list: List()
    });

    const result = mapStateToProps({task});
    expect(result).to.have.property('todo', List());
    expect(result).to.have.property('wip', List());
    expect(result).to.have.property('done', List());
  });

  it('should render correctly the BoardContainer', () => {
    const list = List.of(1,2,3);
    const tree = sd.shallowRender(<BoardContainer todo={list} wip={list} done={list}/>);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className='row'>
        <BoardColumn title='TODO' items={list}/>
        <BoardColumn title='WIP' items={list}/>
        <BoardColumn title='DONE' items={list}/>
      </div>
    );
  });
});
