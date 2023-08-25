import React from 'react';
import Table from '../../UI/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface dataItem {
  _sum: { lostMainBalance: number };
  dateOfPurchase: string;
}
export interface ProfitByDayProps {
  startDate: string | Date;
  setStartDate: (value: Date) => void;
  endDate: string | Date;
  setEndDate: (value: Date) => void;
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

const ProfitOnServerRangeDate = ({ startDate, setStartDate, endDate, setEndDate, text, data }: ProfitByDayProps) => {
  return (
    <div>
      <div className="header-section-in-profit">
        {text}
        <div className="container-date-range">
          c
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
            maxDate={new Date()}
            dateFormat="dd.MM.yyyy"
          />
          по
          <DatePicker
            selected={endDate}
            onChange={(date: any) => setEndDate(date)}
            minDate={startDate}
            maxDate={new Date()}
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>

      <div>
        <Table header={header} data={data} ItemComponent={ProfitOnServerItem} className="table" />
      </div>
    </div>
  );
};
export default ProfitOnServerRangeDate;
