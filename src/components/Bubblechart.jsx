import React from 'react';
import ChartComponent from './chartcomponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales, Profits, and Expenses',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 1000, // this is too scale the size of the bubbles a bit
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

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

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;