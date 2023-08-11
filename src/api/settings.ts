import axios from 'axios';

const BASE_URL = 'https://magicowgs.geryon.space/api_dev';

export const baseApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

baseApi.defaults.headers.common['Content-Type'] = 'application/json';
if (typeof window !== 'undefined') {
  // Perform localStorage action
  const token = localStorage.getItem('accessToken');
  if (token) {
    baseApi.defaults.headers.common['authorization'] = `Bearer ${token}`;
  }
}

export const refreshAccessTokenFn = async () => {
  const response = await baseApi.get<any>('auth/refresh');
  return response.data;
};

baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes('not logged in') && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return baseApi(originalRequest);
    }
    if (error.response.data.message.includes('not refresh')) {
      document.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
