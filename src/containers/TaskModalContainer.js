import React from 'react';

import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { updateCard, moveCard, removeCard } from 'actions/taskAction';
import { closeTaskModal } from 'actions/modalAction';

import TaskModalDescription from 'components/Modal/TaskModalDescription';
import TaskModalTitle from 'components/Modal/TaskModalTitle';

export const mapStateToProps = ({modal}) => {
  let task = modal.get('task', undefined);
  return { task };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (editedTask) => { dispatch(updateCard(editedTask)); },
    closeTaskModal: () => { dispatch(closeTaskModal()); },
    deleteTask: (task) => { dispatch(removeCard(task)); dispatch(closeTaskModal());},
    moveToTodo: (task) => { dispatch(moveCard(task, 'todo')); dispatch(closeTaskModal());},
    moveToWip: (task) => { dispatch(moveCard(task, 'wip')); dispatch(closeTaskModal());},
    moveToDone: (task) => { dispatch(moveCard(task, 'done')); dispatch(closeTaskModal());}
  };
};

export const TaskModalContainer = ({ task, editTask, closeTaskModal, moveToTodo,
    moveToWip, moveToDone, deleteTask }) => {
  let todoButton, wipButton, doneButton, deleteButton;

  if (task) {
    task = JSON.parse(JSON.stringify(task));
    todoButton = task.status !== 'todo' && <button className='btn btn-primary' onClick={moveToTodo.bind(null,task)}> To Todo </button>;
    wipButton = task.status !== 'wip' && <button className='btn btn-primary' onClick={moveToWip.bind(null,task)}> To Wip </button>;
    doneButton = task.status !== 'done' && <button className='btn btn-primary' onClick={moveToDone.bind(null,task)}> To Done </button>;
    deleteButton = <button className='btn btn-danger' onClick={deleteTask.bind(null,task)}> Delete </button>;
  }

  return (
    <Modal show={task} onHide={closeTaskModal}>
      <Modal.Header>
        <Modal.Title>
          <TaskModalTitle task={task} editTitle={editTask}/>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TaskModalDescription task={task} editDescription={editTask}/>
      </Modal.Body>

      <Modal.Footer>
        {todoButton}
        {wipButton}
        {doneButton}
        {deleteButton}
      </Modal.Footer>
    </Modal>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskModalContainer);
