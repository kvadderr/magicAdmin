import axios from 'axios';

const BASE_URL = 'https://magicowgs.geryon.space/dev';

export const baseApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

let token;

if (typeof window !== 'undefined') {
  token = localStorage.getItem('accessToken');
}
baseApi.defaults.headers.common['Content-Type'] = 'application/json';

if (token) {
  baseApi.defaults.headers.common['authorization'] = `Bearer ${token}`;
}

export const refreshAccessTokenFn = async () => {
  const response = await baseApi.get<any>('auth/refresh');
  return response.data;
};

const config = {
  headers: {
    ['Content-Type']: 'application/json',
    authorization: `Bearer ${token}`,
  },
};

export const checkAdmin = async () => {
  const response = await axios.get<any>(`https://magicowgs.geryon.space/dev/auth/validateAdmin`, config);
  return response.data;
};

baseApi.interceptors.response.use(
  async (response: any) => {
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
