import { baseApi } from './settings';

export const getIncomeToday = async () => {
  const response = await baseApi.get<any>('/statisctic/today');
  return response.data;
};
export const getIncome30Days = async () => {
  const response = await baseApi.get<any>('/statisctic/last30');
  return response.data;
};
export const getIcomeMonth = async () => {
  const response = await baseApi.get<any>('/statisctic/month');
  return response.data;
};
export const getIcomeAllTime = async () => {
  const response = await baseApi.get<any>('/statisctic/allTime');
  return response.data;
};
export const getIcomeByDay = async () => {
  const response = await baseApi.get<any>('/statisctic/perDay');
  return response.data;
};
export const getIcomeRangeDate = async (start: Date, end: Date) => {
  const response = await baseApi.get<any>(`/statisctic/randomDate?startDate=${start}&endDate=${end}`);
  return response.data;
};
export const getAverageDepositAmount = async () => {
  const response = await baseApi.get<any>(`/statisctic/avgDeposite`);
  return response.data;
};
export const getAverageNumberOfDeposits = async () => {
  const response = await baseApi.get<any>(`statisctic/avgDepositePerUser`);
  return response.data;
};
