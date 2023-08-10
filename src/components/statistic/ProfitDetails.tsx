import React from 'react';
import { useQuery } from 'react-query';
import { getIncome } from '../../api/baseApi';

const ProfitDetails = () => {
  const { isLoading, error, data } = useQuery('repoData', getIncome);
  console.log('isLoading', isLoading);
  console.log('error', error);
  console.log('data', data);
  return <div style={{ backgroundColor: 'blue', height: 500, width: 500 }}>это доход</div>;
};
export default ProfitDetails;
