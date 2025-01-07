import { createSlice } from '@reduxjs/toolkit';
import { signupUser } from './authActions';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    signup: (state, action) => {
        console.log("action.payload-->", action.payload)
        state.user = action.payload;
    },
    login: (state, action) => {
        state.user = action.payload;
    },
    logout: (state) => {
        state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
        console.log("Signup loading..."); 
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        console.log("Signup succeeded, user data:", action.payload);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
        console.log("Signup failed, error:", action.error.message); 
      });
  },
});

export const { signup, login, logout } = authSlice.actions; // Exporting named actions
export default authSlice.reducer; // Exporting the reducer as the default export
