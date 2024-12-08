import React, { useEffect, useState } from 'react';
import BarChart from './components/Barchart';
import LineChart from './components/Linechart';
import ScatterChart from './components/Scatterchart';
import BubbleChart from './components/Bubblechart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('/financial_data.json') // this is in the public folder
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  if (!chartData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Financial Charts</h1>
      <h2>Bar Chart</h2>
      <BarChart data={chartData} />
      <h2>Line Chart</h2>
      <LineChart data={chartData} />
      <h2> Scatter Chart</h2>
      <ScatterChart data={chartData} />
      <h2>Bubble Chart</h2>
      <BubbleChart data={chartData} />
    </div>
  );
};
  
export default App;