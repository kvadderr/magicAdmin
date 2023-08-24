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
    name: 'Предмет',
  },
  {
    id: 2,
    name: 'Количество покупок',
  },
];

const ProfitOnServerItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.item}</td>
      <td>{data?.amount != null ? data.amount : 0}</td>
    </tr>
  );
};

const CountOfProducts = ({ text, data }: ProfitByDayProps) => {
  return (
    <div>
      <div className="header-section-in-profit">{text}</div>
      <div>
        <Table header={header} data={data} ItemComponent={ProfitOnServerItem} className="table" />
      </div>
    </div>
  );
};
export default CountOfProducts;
