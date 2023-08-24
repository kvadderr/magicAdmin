import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getVisitors, getVisitorsByDay } from 'api/visitsApi';
import Loader from 'components/Loader';
import CountVisits from './CountVisits';
import VisitsTable from './VisitsTable';

const Visits = () => {
  const array_request = [getVisitors, getVisitorsByDay];
  const [activeSection, setActiveSection] = useState(0);
  const [filterValue, setFilterValue] = useState('day');
  const { isLoading, data, refetch, isFetching } = useQuery(['visits', array_request[activeSection]], () =>
    array_request[activeSection](filterValue),
  );

  useEffect(() => {
    refetch();
  }, [activeSection, filterValue]);

  const handlerClickSection = (index: number) => {
    setActiveSection(index);
  };

  const ArrayMenu = [
    { text: 'Количество посещений за день / месяц', component: 'CountVisits' },
    { text: 'Посещения по дням / месяцам', component: 'VisitsTable' },
  ];

  const changeComponent = (item: any) => {
    let comp = undefined;
    switch (item.component) {
      case 'CountVisits':
        comp = <CountVisits data={data} filterValue={filterValue} setFilterValue={setFilterValue} />;
        break;
      case 'VisitsTable':
        comp = <VisitsTable data={data} filterValue={filterValue} setFilterValue={setFilterValue} />;
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
export default Visits;
