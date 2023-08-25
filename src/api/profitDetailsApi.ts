import { baseApi } from './settings';

export const getProfitOnServer = async () => {
  const response = await baseApi.get<any>('/statisctic/profitPerServer');
  return response.data;
};
export const getProfitOnServerRangeDate = async (start: Date, end: Date) => {
  const response = await baseApi.get<any>(`/statisctic/profitPerServerOnRandomDate?startDate=${start}&endDate=${end}`);
  return response.data;
};
export const getProfitByItem = async () => {
  const response = await baseApi.get<any>('/statisctic/profitPerItem');
  return response.data;
};
export const getProfitByItemRangeDate = async (start: Date, end: Date, serverId: number | undefined) => {
  const response = await baseApi.get<any>(
    `/statisctic/profitPerItemOnRandomDateOnServer?startDate=${start}&endDate=${end}&serverId=${serverId}`,
  );
  return response.data;
};
export const getCountOfProducts = async () => {
  const response = await baseApi.get<any>(`/statisctic/countOfProducts`);
  return response.data;
};
export const getCountOfProductsRangeDate = async (start: Date, end: Date) => {
  const response = await baseApi.get<any>(`/statisctic/countOfProductsByRandomDate?startDate=${start}&endDate=${end}`);
  return response.data;
};
