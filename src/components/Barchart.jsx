import React from 'react';
import ChartComponent from './chartcomponent';

const Barchart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // the color of the bar
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
// the chart options 
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default Barchart;