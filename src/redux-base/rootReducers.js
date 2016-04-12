import { combineReducers } from 'redux-immutablejs';

import taskReducer from 'reducers/taskReducer';
import modalReducer from 'reducers/modalReducer';

export default combineReducers({
  task: taskReducer,
  modal: modalReducer
});
