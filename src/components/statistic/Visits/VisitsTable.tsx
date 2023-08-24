import React from 'react';
import Loader from 'components/Loader';
import Table from 'components/UI/Table';
import { CountVisitsProps } from './CountVisits';

const header = [
  {
    id: 1,
    name: 'Дата',
  },
  {
    id: 2,
    name: 'Посещения',
  },
];

const VisitsTableItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.sortDate || data?.sortedMonth}</td>
      <td>{data?._count?.ip}</td>
    </tr>
  );
};

const VisitsTable = ({ data, filterValue, setFilterValue }: CountVisitsProps) => {
  return (
    <div className="box-count-visits">
      <div className="header-count-visits">
        <div>Количество посещений</div>
        <div className="custom-select">
          <select defaultValue={filterValue} onChange={(event) => setFilterValue(event.target.value)}>
            <option value="day">по дням</option>
            <option value="month">по месяцам</option>
          </select>
        </div>
      </div>
      {data === undefined ? (
        <Loader />
      ) : (
        <Table header={header} data={data} ItemComponent={VisitsTableItem} className="table" />
      )}
    </div>
  );
};
export default VisitsTable;
