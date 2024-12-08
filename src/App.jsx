import React, { useEffect, useState } from 'react';
import BarChart from './components/Barchart';
import LineChart from './components/Linechart';
import ScatterChart from './components/Scatterchart';
import BubbleChart from './components/Bubblechart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('public/financial_data.json') // this is in the public folder
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
