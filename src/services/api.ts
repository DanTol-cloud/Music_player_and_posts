import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Affirmations} from '../../types.ts';

export const affirmationsApi = createApi({
  reducerPath: 'affirmationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://astrodev.space/api/affirmations/',
  }),
  endpoints: builder => ({
    getAll: builder.query<Affirmations, void>({
      query: () => '/test',
    }),
  }),
});
