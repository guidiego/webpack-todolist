import React from 'react';

import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { updateCard, moveCard, removeCard } from 'actions/taskAction';
import { closeTaskModal } from 'actions/modalAction';

import TaskModalDescription from 'components/Modal/TaskModalDescription';
import TaskModalTitle from 'components/Modal/TaskModalTitle';

export const mapStateToProps = ({modal, task}) => {
  let id = modal.get('task', undefined);
  let selectedTask = task.get('list').filter(task => task.id === id).get(0);
  return { task: selectedTask };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (id, key, value) => { dispatch(updateCard(id, key, value)); },
    closeTaskModal: () => { dispatch(closeTaskModal()); },
    deleteTask: (task) => { dispatch(removeCard(task)); dispatch(closeTaskModal());},
    moveToTodo: (id) => { dispatch(updateCard(id, 'status', 'todo')); dispatch(closeTaskModal());},
    moveToWip: (id) => { dispatch(updateCard(id, 'status', 'wip')); dispatch(closeTaskModal());},
    moveToDone: (id) => { dispatch(updateCard(id, 'status', 'done')); dispatch(closeTaskModal());}
  };
};

export const TaskModalContainer = ({ task, editTask, closeTaskModal, moveToTodo,
    moveToWip, moveToDone, deleteTask }) => {
  if (!task) return null;

  let todoButton = task.status !== 'todo' && <button className='btn btn-primary' onClick={moveToTodo.bind(null,task.id)}> To Todo </button>;
  let wipButton = task.status !== 'wip' && <button className='btn btn-primary' onClick={moveToWip.bind(null,task.id)}> To Wip </button>;
  let doneButton = task.status !== 'done' && <button className='btn btn-primary' onClick={moveToDone.bind(null,task.id)}> To Done </button>;
  let deleteButton = <button className='btn btn-danger' onClick={deleteTask.bind(null,task)}> Delete </button>;


  return (
    <Modal show={task} onHide={closeTaskModal}>
      <Modal.Header>
        <Modal.Title>
          <TaskModalTitle id={task.id} value={task.title} editTask={editTask}/>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <TaskModalDescription id={task.id} value={task.description} editTask={editTask}/>
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
