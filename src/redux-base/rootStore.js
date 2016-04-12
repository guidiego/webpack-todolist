import { applyMiddleware, createStore } from 'redux';
import * as storage from 'redux-storage';

import rootReducers from './rootReducers';
import createEngine from 'redux-storage-engine-localstorage';
import immutableMerger from 'redux-storage-merger-immutablejs';

const reducer = storage.reducer(rootReducers, immutableMerger);
const engine = createEngine('todolist-data-9898DSAHF98DSHF');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddlewares = applyMiddleware(middleware)(createStore);
const store = createStoreWithMiddlewares(reducer);
const load = storage.createLoader(engine);

load(store);

export default store;
