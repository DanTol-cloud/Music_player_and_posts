import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';

import {affirmationsApi} from './api.ts';

const reducer = {
  [affirmationsApi.reducerPath]: affirmationsApi.reducer,
};

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(affirmationsApi.middleware),
});

setupListeners(store.dispatch);
