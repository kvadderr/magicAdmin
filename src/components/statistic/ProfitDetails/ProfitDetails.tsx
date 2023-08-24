import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import {
  getProfitOnServer,
  getProfitOnServerRangeDate,
  getProfitByItem,
  getProfitByItemRangeDate,
  getCountOfProducts,
  getCountOfProductsRangeDate,
} from '../../../api/profitDetailsApi';
import Loader from 'components/Loader';
import ProfitOnServer from './ProfitOnServer';
import ProfitOnServerRangeDate from './ProfitOnServerRangeDate';
import ProfitByItem from './ProfitByItem';
import ProfitByItemRangeDate from './ProfitByItemRangeDate';
import CountOfProducts from './CountOfProducts';
import CountOfProductsRangeDate from './CountOfProductsRangeDate';

const ProfitDetails = () => {
  const [activeSection, setActiveSection] = useState(0);
  const array_request = [
    getProfitOnServer,
    getProfitOnServerRangeDate,
    getProfitByItem,
    getProfitByItemRangeDate,
    getCountOfProducts,
    getCountOfProductsRangeDate,
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
    { text: 'Доход с каждого сервера', component: 'ProfitOnServer' },
    { text: 'Доход с каждого сервера за выбранный период', component: 'ProfitOnServerRangeDate' },
    { text: 'Доход с каждого товара', component: 'ProfitByItem' },
    { text: 'Доход с каждого товара за выбранный период', component: 'ProfitByItemRangeDate' },
    // { text: 'Доход с каждого товара за выбранный период на указанном сервер', component: 'ProfitByDay' },
    { text: 'Количество покупок товара', component: 'CountOfProducts' },
    { text: 'Количество покупок товара за выбранный период', component: 'CountOfProductsRangeDate' },
  ];

  const handlerClickSection = (index: number) => {
    setActiveSection(index);
  };

  const changeComponent = (item: any) => {
    console.log('item', item);
    let comp = undefined;
    switch (item.component) {
      case 'ProfitOnServer':
        comp = <ProfitOnServer text={item.text} data={data} />;
        break;
      case 'ProfitOnServerRangeDate':
        comp = (
          <ProfitOnServerRangeDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            data={data}
            text={item.text}
          />
        );
        break;
      case 'ProfitByItem':
        comp = <ProfitByItem text={item.text} data={data} />;
        break;
      case 'ProfitByItemRangeDate':
        comp = (
          <ProfitByItemRangeDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            data={data}
            text={item.text}
          />
        );
        break;
      case 'CountOfProducts':
        comp = <CountOfProducts data={data} text={item.text} />;
        break;
      case 'CountOfProductsRangeDate':
        comp = (
          <CountOfProductsRangeDate
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            data={data}
            text={item.text}
          />
        );
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
export default ProfitDetails;
