import React from 'react';

import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { updateCard, removeCard } from 'actions/taskAction';
import { closeTaskModal } from 'actions/modalAction';

import TaskModalDescription from 'components/Modal/TaskModalDescription';
import TaskModalTitle from 'components/Modal/TaskModalTitle';

export const mapStateToProps = (state) => {
  let id = state.getIn(['modal', 'task'], undefined);
  let selectedTask = state.getIn(['task', 'list']).filter(task => task.get('id') === id).get(0);

  return { task: selectedTask };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (id, key, value) => { dispatch(updateCard(id, key, value)); },
    closeTaskModal: () => { dispatch(closeTaskModal()); },
    deleteTask: (task) => { dispatch(removeCard(task.get('id'))); dispatch(closeTaskModal());},
    moveToTodo: (id) => { dispatch(updateCard(id, 'status', 'todo')); dispatch(closeTaskModal());},
    moveToWip: (id) => { dispatch(updateCard(id, 'status', 'wip')); dispatch(closeTaskModal());},
    moveToDone: (id) => { dispatch(updateCard(id, 'status', 'done')); dispatch(closeTaskModal());}
  };
};

export const TaskModalContainer = ({ task, editTask, closeTaskModal, moveToTodo,
    moveToWip, moveToDone, deleteTask }) => {
  if (!task) return null;

  let status = task.get('status');
  let taskID = task.get('id');

  let todoButton = status !== 'todo' &&
    <button className='btn btn-primary' onClick={moveToTodo.bind(null, taskID)}> To Todo </button>;

  let wipButton = status !== 'wip' &&
    <button className='btn btn-primary' onClick={moveToWip.bind(null, taskID)}> To Wip </button>;

  let doneButton = status !== 'done' &&
    <button className='btn btn-primary' onClick={moveToDone.bind(null, taskID)}> To Done </button>;

  let deleteButton = <button className='btn btn-danger' onClick={deleteTask.bind(null, task)}> Delete </button>;

  return (
    <Modal show={task} onHide={closeTaskModal}>
      <Modal.Header>
        <Modal.Title>
          <TaskModalTitle id={taskID} value={task.get('title')} editTask={editTask}/>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TaskModalDescription id={taskID} value={task.get('description')} editTask={editTask}/>
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
