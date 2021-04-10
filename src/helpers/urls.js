const API_ROOT = 'https://jsonplaceholder.typicode.com'
export const APIUrls = {
  login: () => `${API_ROOT}/todos`,
  signup: () => `${API_ROOT}/users/signup`,
  fetchPosts: () => `${API_ROOT}/users`,
};
