import React from 'react';
import ChartComponent from './chartcomponent';

const Scatterchart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Expenses vs Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // scatter color
      },
    ],
  };
// chart options
  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default Scatterchart;