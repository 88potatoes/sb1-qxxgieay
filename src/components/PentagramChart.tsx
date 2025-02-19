import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const generateRandomStats = () => {
  return {
    historyTaking: Math.random() * 10,
    bedsideInvestigation: Math.random() * 10,
    differentials: Math.random() * 10,
    investigationsOrdered: Math.random() * 10,
    finalDiagnosis: Math.random() * 10,
  };
};

const PentagramChart = () => {
  const stats = generateRandomStats();

  const data = {
    labels: ['History Taking', 'Bedside Investigation', 'Differentials', 'Investigations Ordered', 'Final Diagnosis'],
    datasets: [
      {
        label: 'Clinical Skills',
        data: [
          stats.historyTaking,
          stats.bedsideInvestigation,
          stats.differentials,
          stats.investigationsOrdered,
          stats.finalDiagnosis,
        ],
        backgroundColor: 'rgba(34, 202, 236, 0.2)',
        borderColor: 'rgba(34, 202, 236, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default PentagramChart;