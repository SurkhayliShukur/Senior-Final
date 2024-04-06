import React, { useState } from 'react';
import { Statistics as data } from '../../assets/data';
import moment from 'moment'

export const Statistics = () => {

  const createdData = data.data.created.data;
  const completedData = data.data.completed.data;
  const overdueData = data.data.overdue.data;

  const getMaxCount = () => {
    const counts = Object.values(createdData).map(item => item.count);
    const max = Math.max(...counts)
    return max + max / 3;
  };

  const maxCount = getMaxCount()

  const renderBar = (count, maxCount, color, name) => {
    const barHeight = (count / maxCount) * 100;

    return (
      <div className={`bar ${color}`} style={{ height: `${barHeight}%`}} title={`${count} ${name}`}></div>
    );
  };

  // Start date

  const renderStartValues = () => {
    return Object.values(createdData).map(day => day.start);
  };

  const startValues = renderStartValues();

  // Bars hide & show

  const [inputValues, setInputValues] = useState({
    Created: true,
    Completed: false,
    Overdue: false
  })

  const handleCheckbox = (name) => {
    setInputValues(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  return (
    <div>
      <div className="my-3 h2">
        <span>Statistics</span>
      </div>
      <div className='d-flex mx-1'>
          {
            Object.keys(inputValues).map((name) => (
              <div className='checkbox me-2' key={name}>
                <input className='form-check-input' id={name} type='checkbox' checked={inputValues[name]} onChange={() => handleCheckbox(name)} />
                <div className={`span ${name.toLowerCase()}`}> </div>
                <label className='ms-1' htmlFor={name}>{name}</label>
              </div>
            ))
          }
        </div>
      <div className="row p-3 rounded position-relative">
        {Object.keys(createdData).map((day, index) => {
          const createdCount = createdData[day].count;
          const completedCount = completedData[day].count;
          const overdueCount = overdueData[day].count;
          const date = moment.unix(startValues[index]).format("DD MMM")

          const maxCount = getMaxCount();

          return (
            <div key={day} className="col m-0 p-0" style={{position: "relative"}}>
              <div className="chart-container">
                <div className='background'>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="bar-chart">
                  {inputValues.Created ? renderBar(createdCount, maxCount, 'bar-created', "Created") : renderBar(0, maxCount, 'bar-created', "Created")}
                  {inputValues.Completed ? renderBar(completedCount, maxCount, 'bar-completed', "Completed") : renderBar(0, maxCount, 'bar-completed', "Completed")}
                  {inputValues.Overdue ? renderBar(overdueCount, maxCount, 'bar-overdue', "Overdue") : renderBar(0, maxCount, 'bar-overdue', "Overdue")}
                </div>
              </div>
              <h5>{date}</h5>
            </div>
          )
        })}
        <div className="chart-scale" style={{position:"absolute", right: "-20px", top: "0px"}}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="scale-mark" key={i} style={{position: "absolute", top: `${i * 25}%`}}>
                {Math.ceil(maxCount * (1 - ((i) / 4)))}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};