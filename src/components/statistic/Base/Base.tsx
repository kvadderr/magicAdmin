import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  getIncomeToday,
  getIncome30Days,
  getIcomeMonth,
  getIcomeAllTime,
  getIcomeByDay,
  getIcomeRangeDate,
  getAverageDepositAmount,
  getAverageNumberOfDeposits,
} from '../../../api/baseApi';
import Loader from 'components/Loader';
import Amount from './Amount';
import ProfitByDay from './ProfitByDay';
import ProfitRangeDate from './ProfitRangeDate';

const Base = () => {
  const [activeSection, setActiveSection] = useState(0);
  const array_request = [
    getIncomeToday,
    getIncome30Days,
    getIcomeMonth,
    getIcomeAllTime,
    getIcomeByDay,
    getIcomeRangeDate,
    getAverageDepositAmount,
    getAverageNumberOfDeposits,
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { isLoading, data, refetch, isFetching } = useQuery(['incomeToday', array_request[activeSection]], () =>
    array_request[activeSection](startDate, endDate),
  );

  useEffect(() => {
    refetch();
  }, [activeSection, startDate, endDate]);

  const ArrayMenu = [
    { text: 'Доход за сегодня', component: 'Amount' },
    { text: 'Доход за 30 дней', component: 'Amount' },
    { text: 'Доход за текущий месяц', component: 'Amount' },
    { text: 'Доход за всё время', component: 'Amount' },
    { text: 'Доход за всё время по дням', component: 'ProfitByDay' },
    { text: 'Доход за выбранный период', component: 'ProfitRangeDate' },
    { text: 'Cредняя сумма депозита', component: 'Amount' },
    { text: 'Среднее количество депозитов одного пользователя в месяц', component: 'Amount' },
  ];

  const handlerClickSection = (index: number) => {
    setActiveSection(index);
  };

  const changeComponent = (item: any) => {
    let comp = undefined;
    switch (item.component) {
      case 'Amount':
        comp = <Amount text={item.text} data={data} />;
        break;
      case 'ProfitByDay':
        comp = <ProfitByDay text={item.text} data={data} />;
        break;
      case 'ProfitRangeDate':
        comp = (
          <ProfitRangeDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            data={data}
          />
        );
        break;
    }
    return comp;
  };

  return (
    <div className="container-base">
      {isFetching || data === undefined || isLoading ? (
        <Loader />
      ) : (
        <div className="content-base">{changeComponent(ArrayMenu[activeSection])}</div>
      )}
      <div className="menu-base">
        {ArrayMenu.map((section: any, index: number) => (
          <div
            key={index}
            className={`menu-base-section ${activeSection === index ? 'menu-base-section-active' : ''}`}
            onClick={() => handlerClickSection(index)}
          >
            {' '}
            {section.text}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Base;
