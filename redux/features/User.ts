import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/user" }),
  endpoints: (builder) => ({
    getUserPreference: builder.query({
      query: (userId) => {
        console.log(userId);
        return {
          url: `/user_preference/${userId}`,
          method: "GET",
        };
      },
    }),

    addPreference: builder.mutation({
      query: ({ data, userId }) => {
        console.log("preferenceData >", data);
        return {
          url: `/user_preference/${userId}`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetUserPreferenceQuery, useAddPreferenceMutation } = UserApi;
