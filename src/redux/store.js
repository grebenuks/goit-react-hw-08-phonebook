// import { applyMiddleware, createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phonebookReducer } from './reducers';
import user from './auth/authReducers';
import storage from 'redux-persist/lib/storage';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { logger } from '../middleWares/logger';

// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
//   auth: user,
// });

// const middleWares = [logger]

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: persistReducer(authPersistConfig, user),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleWares)),
// );

export default { store, persistor };
