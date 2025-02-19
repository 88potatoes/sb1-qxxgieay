import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgressBar = ({ value, maxValue, text, label }) => {
  return (
    <div className="circle-progress-bar">
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={text}
        styles={buildStyles({
          textSize: '16px',
          pathColor: `rgba(62, 152, 199, ${value / maxValue})`,
          textColor: '#3e98c7',
          trailColor: '#d6d6d6',
        })}
      />
      <div className="label mt-2 text-center">{label}</div>
    </div>
  );
};

export default CircleProgressBar;