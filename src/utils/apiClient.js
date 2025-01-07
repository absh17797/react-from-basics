import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://677cf2334496848554c84e31.mockapi.io/api/v1', // Mock API base URL
  timeout: 5000,
});

export default apiClient;