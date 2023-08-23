import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { getIncomeToday, getIncome30Days, getIcomeMonth, getIcomeAllTime, getIcomeByDay } from '../../../api/baseApi';
import Loader from 'components/Loader';
import Amount from './Amount';

const Base = () => {
  const [activeSection, setActiveSection] = useState(0);
  const array_request = [getIncomeToday, getIncome30Days, getIcomeMonth, getIcomeAllTime, getIcomeByDay];
  const { isLoading, error, data, refetch } = useQuery(['incomeToday', array_request[activeSection]], () =>
    array_request[activeSection](),
  );

  useEffect(() => {
    refetch();
  }, [activeSection]);

  const ArrayMenu = [
    { text: 'Доход за сегодня', component: 'Amount' },
    { text: 'Доход за 30 дней', component: 'Amount' },
    { text: 'Доход за текущий месяц', component: 'Amount' },
    { text: 'Доход за всё время', component: 'Amount' },
    { text: 'Доход за всё время по дням', component: 'Amount' },
  ];

  const handlerClickSection = (index: number) => {
    setActiveSection(index);
  };

  const changeComponent = (item: any) => {
    if (item.component === 'Amount') {
      return <Amount text={item.text} data={data} />;
    }
  };
  if (isLoading) return <Loader />;

  return (
    <div className="container-base">
      <div className="content-base">{changeComponent(ArrayMenu[activeSection])}</div>
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
