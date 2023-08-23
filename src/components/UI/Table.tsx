import React from 'react';
import { ProfitByDayProps } from '../statistic/Base/ProfitByDay';

interface ITableHeader {
  id: number;
  name: string;
}

interface TableProps<T> {
  header: ITableHeader[];
  data: ProfitByDayProps[] | any;
  ItemComponent: React.FC<{ data: T }>;
  className: string;
  refund?: (value: string | number) => void;
}

function Table<T>({ header, data, ItemComponent, className, refund }: TableProps<T>) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {header.map((el, index) => (
            <th scope="col" key={index}>
              {el.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <></>
        {data &&
          Array.isArray(data) &&
          data.map((el, index) => {
            return <ItemComponent data={(refund ? { dataInventory: el, refund: refund } : el) as T} key={index} />;
          })}
      </tbody>
    </table>
  );
}

export default Table;
