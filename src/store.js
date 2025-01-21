import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

import { userAPI } from './features/users/userApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
});
