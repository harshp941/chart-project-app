import React from 'react';
import ChartComponent from './chartcomponent';

const Linechart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Profits',
        data: data.profits,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)', //line color
        tension: 0.1,
      },
    ],
  };
// chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default Linechart;