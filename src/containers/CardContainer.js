import React, { PropTypes } from 'react';

import { Map } from 'immutable';
import { connect } from 'react-redux';

import { openTaskModal } from 'actions/modalAction';

import Card from 'components/Card/Card';

export const mapDispatchToProps = (dispatch, {task}) => {
  return {
    openTaskModal: () => { dispatch(openTaskModal(task.get('id'))); }
  };
};

export const CardContainer = ({ task, openTaskModal }) => {
  return (
    <Card task={task} onClick={openTaskModal} />
  );
};

CardContainer.propTypes = {
  task: PropTypes.instanceOf(Map),
  openTaskModal: PropTypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(CardContainer);
