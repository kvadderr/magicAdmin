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
    name: 'Сервер',
  },
  {
    id: 2,
    name: 'Прибыль',
  },
];

const ProfitOnServerItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.serverName}</td>
      <td>{(data?.profit != null ? data.profit : 0) + ' ₽'}</td>
    </tr>
  );
};

const ProfitOnServer = ({ text, data }: ProfitByDayProps) => {
  return (
    <div>
      <div className="header-section-in-profit">{text}</div>
      <div>
        <Table header={header} data={data} ItemComponent={ProfitOnServerItem} className="table" />
      </div>
    </div>
  );
};
export default ProfitOnServer;
