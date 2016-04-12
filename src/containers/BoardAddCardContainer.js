import React from 'react';

import { connect } from 'react-redux';

import BoardNewCard from 'components/Board/BoardNewCard';

import { createCard } from 'actions/taskAction';

export const mapStateToProps = (state) => {
  return { lastId: state.get(['task', 'lastId'], 0) };
};

export const mapDispatchToProps = (dispatch, {list}) => {
  return {
    createCard: (task) => {
      task.status = list;
      dispatch(createCard(task));
    }
  };
};

export const BoardAddCardContainer = ({ lastId, createCard, addToList }) => {
  return (
    <BoardNewCard lastId={lastId} createCard={createCard}/>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardAddCardContainer);
