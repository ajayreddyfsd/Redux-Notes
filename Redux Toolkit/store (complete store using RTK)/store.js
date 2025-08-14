import { configureStore } from '@reduxjs/toolkit';

//why import logger, coz we wanna see everything getting logged into google console
import logger from 'redux-logger';

//importing the root-reducer.js
import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

//configuring the store by adding root-reducer.js and middlewares
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});


