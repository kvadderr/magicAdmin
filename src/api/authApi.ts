import { baseApi } from './settings';
export const signUpUserFn = async (user: any) => {
  const response = await baseApi.post<any>('auth/register', user);
  return response.data;
};
