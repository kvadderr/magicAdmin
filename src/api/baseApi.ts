import { baseUrl } from '../helpers/baseUrl';

export const getIncome = () => {
  return fetch(`${baseUrl}/statistic/today`).then((response) => response.json());
};
