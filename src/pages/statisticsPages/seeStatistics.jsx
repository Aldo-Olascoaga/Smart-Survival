import React from 'react';
import Header from '../../components/Header/Header';
import StatisticsButtons from '../../components/StatisticsButtons/StatisticsButtons';

const seeStatistics = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <StatisticsButtons />
      {/*<Board data={data} />*/}
    </div>
  );
};

export default seeStatistics;
