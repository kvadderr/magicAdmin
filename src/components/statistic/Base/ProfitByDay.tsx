import React from 'react';
import Table from '../../UI/Table';

interface dataItem {
  _sum: { lostMainBalance: number };
  dateOfPurchase: string;
}
export interface ProfitByDayProps {
  text: string;
  data: dataItem[] | undefined;
}
const header = [
  {
    id: 1,
    name: 'Дата',
  },
  {
    id: 2,
    name: 'Прибыль',
  },
];

const ProfitByDayItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.dateOfPurchase}</td>
      <td>{data?._sum?.lostMainBalance + ' ₽'}</td>
    </tr>
  );
};

const ProfitByDay = ({ text, data }: ProfitByDayProps) => {
  return (
    <div>
      <div className="header-section-in-profit">{text}</div>
      <div>
        <Table header={header} data={data} ItemComponent={ProfitByDayItem} className="table" />
      </div>
    </div>
  );
};
export default ProfitByDay;
