import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {affirmationsApi} from '../api';

const reducer = {
  [affirmationsApi.reducerPath]: affirmationsApi.reducer,
};

export const index = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(affirmationsApi.middleware),
});

setupListeners(index.dispatch);
