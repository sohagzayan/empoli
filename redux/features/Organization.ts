import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrganizationApi = createApi({
  reducerPath: "OrganizationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/organization" }),
  endpoints: (builder) => ({
    getOrgPopularInterestsCareer: builder.query({
      query: () => {
        return {
          url: `/popular_career_interests/`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetOrgPopularInterestsCareerQuery } = OrganizationApi;
