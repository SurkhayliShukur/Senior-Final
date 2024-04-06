import React, { useContext, useState } from 'react';
import Chart from "react-apexcharts";
import { Apex } from '../../assets/data';
import { StatusCard } from '../../assets/data';
import { ThemeContext } from '../../Context/Theme';

export const Dashboard = () => {
  const { color, theme, fontColor } = useContext(ThemeContext);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCardIndex(index);
  };

  return (
    <div>
      <div className='my-5'>
        <h2>Dashboard</h2>
      </div>
      <div className='d-flex align-items-center gap-5 w-100'>
        <div className='container rounded w-50'>
          <div className='row gy-4'>
            {StatusCard.map((card, index) => (
              <div
                className={`col-6`}
                key={index}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div
                  className='d-flex align-items-center border rounded p-3 shadow'
                  style={{ backgroundColor: hoveredCardIndex === index ? color : '' }}
                >
                  <div className='text-center w-50 h1'>{card.icon}</div>
                  <div className='w-75 p-3'>
                    <p className='m-0 h2'>{card.count}</p>
                    <p className='m-0'>{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-50'>
          <Chart className="shadow" options={Apex} series={Apex.series} height={Apex.chart.height} />
        </div>
      </div>
    </div>
  );
};
