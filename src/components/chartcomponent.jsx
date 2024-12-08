import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {        // this is to see if a chart already exists and to destroy it if it does
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type, //  the type of data like line and bar
      data,
      options,
    });

    return () => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    };

  }, [type, data, options]);

  return <canvas ref={chartRef}></canvas>;  //this is to render
};

export default ChartComponent;