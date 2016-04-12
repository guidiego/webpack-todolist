import { Record, List } from 'immutable';

const Model = {
  id: 0,
  title: undefined,
  description: undefined,
  labels: List(),
  date: new Date(),
  status: 'todo'
};

export default Record(Model);
