import React from 'react';
import Loader from 'components/Loader';

export interface CountVisitsProps {
  data: any;
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const CountVisits = ({ data, filterValue, setFilterValue }: CountVisitsProps) => {
  return (
    <div className="box-count-visits">
      <div className="header-count-visits">
        <div>Количество посещений</div>
        <div className="custom-select">
          <select defaultValue={filterValue} onChange={(event) => setFilterValue(event.target.value)}>
            <option value="day">за день</option>
            <option value="month">за месяц</option>
          </select>
        </div>
      </div>
      {data === undefined ? <Loader /> : <div>Посещения: {data?._count?.ip}</div>}
    </div>
  );
};
export default CountVisits;
