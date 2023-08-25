import { baseApi } from './settings';
export const getServers = async () => {
  const response = await baseApi.get<any>('/servers/server');
  return response.data;
};
