import { createAsyncThunk } from '@reduxjs/toolkit';
import { signupAPI } from './authServices';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userData, { rejectWithValue }) => {
    try {
      console.log("userData==>",userData)
      const response = await signupAPI(userData);
      console.log("response==>",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);