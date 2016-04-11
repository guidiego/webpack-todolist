import React from 'react';

import { connect } from 'react-redux';

import { openTaskModal } from 'actions/modalAction';

import Card from 'components/Card/Card';

export const mapDispatchToProps = (dispatch, {task}) => {
  return {
    openTaskModal: () => { dispatch(openTaskModal(task)); }
  };
};

export const CardContainer = ({ task, openTaskModal }) => {
  return (
    <Card task={task} onClick={openTaskModal} />
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CardContainer);
