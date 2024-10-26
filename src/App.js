import React, { useState, useEffect } from 'react';
import useWeatherData from './hooks/useWeatherData';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import DailyWeatherSummary from './components/DailyWeatherSummary';
import './styles.css';

const App = () => {
  const { currentLocationWeather, error } = useWeatherData();
  const [searchedWeather, setSearchedWeather] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleSearchResult = (weatherData) => {
    setSearchedWeather(weatherData);
  };

  const toggleSummaryView = () => {
    setShowSummary(!showSummary);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const weatherData = searchedWeather || currentLocationWeather;
    }, 600000); 

    return () => clearInterval(intervalId);
  }, [searchedWeather, currentLocationWeather]);

  const appStyles = {
    backgroundImage: `url('/xa.gif')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const weatherDataToShow = searchedWeather || currentLocationWeather;
  const iconCode = weatherDataToShow && weatherDataToShow.weather[0]?.icon;
  const iconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@4x.png` : '';

  return (
    <div style={appStyles}>
      <div className="App">
        {error && <p>{error}</p>}

        {iconUrl && <img src={iconUrl} alt="Weather Icon" className="weather-icon-top-right" />}

        <SearchBar onSearchResult={handleSearchResult} toggleSummaryView={toggleSummaryView} />

        {weatherDataToShow && (
          <>
            {!showSummary ? (
              <div className="weather-display">
                <WeatherCard data={weatherDataToShow} />
              </div>
            ) : (
              <DailyWeatherSummary weatherData={weatherDataToShow} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
