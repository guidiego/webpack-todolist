import React from 'react';
import sd from 'skin-deep';
import { Map, List } from 'immutable';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

import {TaskModalContainer, mapStateToProps} from 'containers/TaskModalContainer';
import { Modal } from 'react-bootstrap';


describe('(containers) TaskModalContainer', () => {
  it('should return the corrected pros pro "mapStateToProps"', () => {
    const state = Map({
      task: Map({
        lastId: 1,
        list: List.of(Map({id:1}))
      }),
      modal: Map({
        task: 1
      })
    })

    const result = mapStateToProps(state);
    expect(result).to.have.property('task', state.get('task').get('list').get(0))
  });
});
