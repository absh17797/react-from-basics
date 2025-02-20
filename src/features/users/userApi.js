import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ 
    // baseUrl: 'https://677cf2334496848554c84e31.mockapi.io/api/v1' 
    // baseUrl: 'http://localhost:5000/api/users',
    baseUrl: 'https://users-auth-mern.onrender.com/api',    
    withCredentials: false,
  }), // Replace with your actual API base URL
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
    signup: builder.mutation({
      query: (user) => ({
        url: "/signup",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useSignupMutation, useLoginMutation } = userAPI;