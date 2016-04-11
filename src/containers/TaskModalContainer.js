import React from 'react';

import { connect } from 'react-redux';

import { Modal } from 'react-bootstrap';

export const mapStateToProps = ({modal}) => {
  const task = modal.get('task', undefined);

  return { task };
};

export const TaskModalContainer = ({ task }) => {
  return (
    <Modal show={task}>
      <Modal.Header>
        <Modal.Title>{task ? task.title : ''}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        One fine body...
      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};

export default connect(
  mapStateToProps,
  null
)(TaskModalContainer);
