import { createStore } from 'redux';
import { recoverTree } from 'utils/LocalStorage';
import { fromJS } from 'immutable';

import rootReducers from './rootReducers';
import storageMiddleware from './storageMiddleware';

const tree = recoverTree();
const initialState = fromJS(tree ? tree : {});

export default createStore(rootReducers);
