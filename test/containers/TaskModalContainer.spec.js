import React from 'react';
import sd from 'skin-deep';
import { Map, List } from 'immutable';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

import {TaskModalContainer, mapStateToProps} from 'containers/TaskModalContainer';
import { Modal } from 'react-bootstrap';


describe('(containers) TaskModalContainer', () => {
  it('should return the corrected pros pro "mapStateToProps"', () => {
    const modal = Map({
      task: Map()
    });

    const result = mapStateToProps({modal});
    expect(result).to.have.property('task', Map())
  });

  it('should render correctly the TaskModalContainer closed', () => {
    const tree = sd.shallowRender(<TaskModalContainer task={undefined}/>);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <Modal show={undefined}>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          One fine body...
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  });
});
