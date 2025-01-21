import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://677cf2334496848554c84e31.mockapi.io/api/v1' }), // Replace with your actual API base URL
  tagTypes: ['User'], // Define tag types
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users', // Endpoint to fetch users
      providesTags: ['User'], // This query provides the "User" tag
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: '/users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User'], // This mutation invalidates the "User" tag
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = userAPI;