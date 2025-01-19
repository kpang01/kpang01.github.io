import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

function DataViz() {
  const [activeChart, setActiveChart] = useState('line');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulated data - replace with actual data fetching
    setData({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Data Analysis Progress',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: '#5CE1E6',
        backgroundColor: 'rgba(92, 225, 230, 0.2)',
      }]
    });
  }, []);

  const chartTypes = {
    line: Line,
    bar: Bar,
    radar: Radar
  };

  const ChartComponent = chartTypes[activeChart];

  return (
    <div className="page-container">
      <h1>Data <span className="glow-text">Visualization</span></h1>
      <div className="content-wrapper">
        <div className="viz-controls">
          <div className="chart-selector">
            {Object.keys(chartTypes).map(type => (
              <button
                key={type}
                className={`viz-button ${activeChart === type ? 'active' : ''}`}
                onClick={() => setActiveChart(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="chart-container">
          {data && <ChartComponent data={data} />}
        </div>

        <div className="viz-gallery">
          <h2>Visualization Gallery</h2>
          <div className="gallery-grid">
            {/* Add your visualization examples here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataViz; 