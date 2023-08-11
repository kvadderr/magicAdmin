import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { getIncomeToday, getIncome30Days, getIcomeMonth, getIcomeAllTime } from '../../api/baseApi';
import Loader from 'components/Loader';

const Base = () => {
  const [activeSection, setActiveSection] = useState(0);
  const array_request = [getIncomeToday, getIncome30Days, getIcomeMonth, getIcomeAllTime];
  const { isLoading, error, data, refetch } = useQuery(['incomeToday', array_request[activeSection]], () =>
    array_request[activeSection](),
  );
  useEffect(() => {
    refetch();
  }, [activeSection]);
  const array_menu = ['Доход за сегодня', 'Доход за 30 дней', 'Доход за текущий месяц', 'Доход за всё время'];

  const handlerClickSection = (index: number) => {
    setActiveSection(index);
  };
  if (isLoading) return <Loader />;
  return (
    <div className="container-base">
      <div className="content-base">{array_menu[activeSection] + ': ' + data.profit + '₽'}</div>
      <div className="menu-base">
        {array_menu.map((section: any, index: number) => (
          <div
            key={index}
            className={`menu-base-section ${activeSection === index ? 'menu-base-section-active' : ''}`}
            onClick={() => handlerClickSection(index)}
          >
            {' '}
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Base;
