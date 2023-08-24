import { baseApi } from './settings';

export const getVisitors = async (type: string) => {
  const response = await baseApi.get<any>(`/statisctic/getVisitors/${type}`);
  return response.data;
};

export const getVisitorsByDay = async (type: string) => {
  const response = await baseApi.get<any>(`/statisctic/getVisitorsPerType/${type}`);
  return response.data;
};
