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
    name: 'Прибыль',
  },
];

const ProfitByItemItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.item != null ? data.item : 0}</td>
      <td>{data?.profit + ' ₽'}</td>
    </tr>
  );
};

const ProfitByItem = ({ text, data }: ProfitByDayProps) => {
  return (
    <div>
      <div className="header-section-in-profit">{text}</div>
      <div>
        <Table header={header} data={data} ItemComponent={ProfitByItemItem} className="table" />
      </div>
    </div>
  );
};
export default ProfitByItem;
