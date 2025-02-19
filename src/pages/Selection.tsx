import React from 'react';
import SelectionTopBar from '../components/SelectionTopBar';
import PentagramChart from '../components/PentagramChart';
import CircleProgressBar from '../components/CircleProgressBar';

const generateRandomValue = (max, decimalPlaces = 0) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.floor(Math.random() * max * factor) / factor;
};

export default function Selection() {
  const simulationsValue = generateRandomValue(100);
  const averageGradeValue = generateRandomValue(10, 1);

  return (
    <div className="selection-page">
      <SelectionTopBar />
      <div className="selection-page-container flex">
        <div className="w-1/2 p-4">
          <PentagramChart />
        </div>
        <div className="w-1/2 p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Dr. Roberts Statistics</h2>
          <div className="flex justify-around w-full">
            <div className="w-1/2 p-4">
              <CircleProgressBar
                value={simulationsValue}
                maxValue={100}
                text={`${simulationsValue}`}
                label="Simulations in the past 30 days"
              />
            </div>
            <div className="w-1/2 p-4">
              <CircleProgressBar
                value={averageGradeValue}
                maxValue={10}
                text={`${averageGradeValue.toFixed(1)}`}
                label="Average Grade (out of 10)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}