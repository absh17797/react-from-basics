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
        state.user = action?.payload;
    },
    login: (state, action) => {
        state.user = action?.payload;
    },
    logout: (state) => {
        state.user = null;
    },
    setUser: (state, action) => {
      state.user = action?.payload?.user;
      state.token = action?.payload?.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("auth");  // Optional: Clear from storage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { signup, login, logout, setUser } = authSlice.actions; // Exporting named actions
export default authSlice.reducer; // Exporting the reducer as the default export
