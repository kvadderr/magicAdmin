import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface ProfitRangeDateProps {
  startDate: string | Date;
  setStartDate: (value: Date) => void;
  endDate: string | Date;
  setEndDate: (value: Date) => void;
  data:
    | {
        endDate: string;
        profit: number;
        startDate: string;
      }
    | undefined;
}

const ProfitRangeDate = ({ startDate, setStartDate, endDate, setEndDate, data }: ProfitRangeDateProps) => {
  return (
    <div>
      <div className="header-section-in-profit">Доход за выбранный период</div>
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
      <div className="box-content-profit-range-date">Доход за выбранный период составляет: {data?.profit}₽</div>
    </div>
  );
};
export default ProfitRangeDate;
