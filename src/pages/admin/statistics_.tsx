import React, { useState } from 'react';
import Base from 'components/statistic/Base';
import ProfitDetails from 'components/statistic/ProfitDetails';
import Visits from 'components/statistic/Visits';

const Statistics = () => {
  const [activeSection, setActiveSection] = useState(0);
  const array_menu = ['Общая', 'Посещения', 'Подробности дохода'];

  const section = () => {
    switch (activeSection) {
      case 0:
        return <Base />;
      case 1:
        return <Visits />;
      case 2:
        return <ProfitDetails />;
      default:
        return <h1>Информации нет</h1>;
    }
  };

  return (
    <div>
      <div className="menuStatictic">
        {array_menu.map((item, index) => (
          <div
            key={index}
            className={`sectionStatistic ${activeSection === index ? 'sectionActive' : ''}`}
            onClick={() => setActiveSection(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="containerSection">{section()}</div>
    </div>
  );
};

export default Statistics;
