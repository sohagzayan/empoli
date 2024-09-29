import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fulfillOnboardingExtraction = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/recruiter' }),
  endpoints: (builder) => ({
    // get all product
    getAllJobs: builder.query({
      query: (queryObj) => `/job?${queryObj}`,
    }),
  }),
});

export const { useGetAllJobsQuery } = fulfillOnboardingExtraction;
