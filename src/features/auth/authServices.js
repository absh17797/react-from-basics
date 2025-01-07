import apiClient from '../../utils/apiClient';

export const signupAPI = (userData) => {
  return apiClient.post('/users', userData);
};
