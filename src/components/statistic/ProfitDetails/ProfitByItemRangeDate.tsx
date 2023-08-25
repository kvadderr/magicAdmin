import React from 'react';
import Table from '../../UI/Table';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useQuery } from 'react-query';
import { getServers } from '../../../api/mainApi';

interface dataItem {
  _sum: { lostMainBalance: number };
  dateOfPurchase: string;
}
export interface ProfitByDayProps {
  startDate: Date;
  setStartDate: (value: Date) => void;
  endDate: Date;
  setEndDate: (value: Date) => void;
  text: string;
  data: dataItem[] | undefined;
  serverId: number | undefined;
  setServerId: (val: number) => void;
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

const ProfitOnServerItem = (value: any) => {
  const { data } = value;
  return (
    <tr>
      <td scope="row">{data?.item}</td>
      <td>{(data?.profit != null ? data.profit : 0) + ' ₽'}</td>
    </tr>
  );
};

const ProfitByItemRangeDate = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  text,
  data,
  serverId,
  setServerId,
}: ProfitByDayProps) => {
  const { data: servers } = useQuery('servers', getServers);
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
          <div> Выбранный сервер:</div>
          <div className="custom-select">
            <select defaultValue={serverId} onChange={(event) => setServerId(Number(event.target.value))}>
              <option value={undefined}>Все</option>
              {servers?.map((server: any, index: any) => (
                <option key={index} value={server.id}>
                  {server.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <Table header={header} data={data} ItemComponent={ProfitOnServerItem} className="table" />
      </div>
    </div>
  );
};
export default ProfitByItemRangeDate;
