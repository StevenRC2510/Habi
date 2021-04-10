import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AppMiddlewares } from 'middleware';
import storage from 'redux-persist/lib/storage';

import { AppReducers } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = AppReducers();

export const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, AppMiddlewares());
const store = createStore(rootReducer, AppMiddlewares());
const persistor = persistStore(store);

export { store, persistor };
