import React, { useState, useEffect } from 'react';

const DailyWeatherSummary = ({ weatherData }) => {
  const [dailySummary, setDailySummary] = useState(null);

  const storeWeatherData = (weatherData) => {
    const currentTimestamp = new Date().getTime();
    const today = new Date().toDateString();

    const storedData = JSON.parse(localStorage.getItem('dailyWeatherData')) || [];

  
    const updatedData = [
      ...storedData, 
      { 
        temp: weatherData.main.temp, 
        condition: weatherData.weather[0].main, 
        timestamp: currentTimestamp 
      }
    ];

  
    const filteredData = updatedData.filter(data => new Date(data.timestamp).toDateString() === today);

    
    localStorage.setItem('dailyWeatherData', JSON.stringify(filteredData));
  };

  
  const calculateDailySummary = () => {
    const storedData = JSON.parse(localStorage.getItem('dailyWeatherData')) || [];

    if (storedData.length === 0) return null;

    const temperatures = storedData.map((data) => data.temp);
    const conditions = storedData.map((data) => data.condition);

    const averageTemp = (temperatures.reduce((acc, temp) => acc + temp, 0) / temperatures.length).toFixed(2);

  
    const maxTemp = Math.max(...temperatures);
    const minTemp = Math.min(...temperatures);


    const conditionFrequency = {};
    conditions.forEach((condition) => {
      conditionFrequency[condition] = (conditionFrequency[condition] || 0) + 1;
    });
    const dominantCondition = Object.keys(conditionFrequency).reduce((a, b) =>
      conditionFrequency[a] > conditionFrequency[b] ? a : b
    );

    return {
      averageTemp,
      maxTemp,
      minTemp,
      dominantCondition,
    };
  };

  useEffect(() => {
    if (weatherData) {
      storeWeatherData(weatherData);
      const summary = calculateDailySummary();
      setDailySummary(summary);
    }
  }, [weatherData]);

  return (
    <div className="daily-summary">
      <h3> Weather Summary</h3>
      {dailySummary ? (
        <>
          <p>Average Temp {dailySummary.averageTemp}°C</p>
          <p>Maximum Temp {dailySummary.maxTemp}°C</p>
          <p>Minimum Temp {dailySummary.minTemp}°C</p>
          <p>Dominant Condition {dailySummary.dominantCondition}</p>
        </>
      ) : (
        <p>No data available yet for today.</p>
      )}
    </div>
  );
};

export default DailyWeatherSummary;
