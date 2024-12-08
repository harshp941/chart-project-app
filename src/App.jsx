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
      <h1>Charts</h1>
      <BarChart data={chartData} />
      <LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />
    </div>
  );
};
  //return (
  //  <div>
    //  <h1>Financial Dashboard</h1>
     // <div style={{ width: '600px', height: '400px' }}>
     //   <BarChart data={chartData} />
     // </div>
     // <div style={{ width: '600px', height: '400px' }}>
     //   <LineChart data={chartData} />
     // </div>
     // <div style={{ width: '600px', height: '400px' }}>
     //   <ScatterChart data={chartData} />
     // </div>
     // <div style={{ width: '600px', height: '400px' }}>
     //   <BubbleChart data={chartData} />
    //  </div>
   // </div>
 // );
//};

export default App;