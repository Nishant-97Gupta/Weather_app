import React from 'react';
import '../style/WeatherCard.css'; 

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name: cityName, main, weather, wind } = data;
  const iconCode = weather && weather[0]?.icon;

  const customIconUrl = iconCode ? `/icons/${iconCode}.png` : '';
  const fallbackIconUrl = iconCode ? `http://openweathermap.org/img/wn/${iconCode}@2x.png` : '';

  const handleIconError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackIconUrl;
  };

  return (
    <div className="weather-card">
      {customIconUrl && (
        <img 
          src={customIconUrl} 
          alt="Weather Icon" 
          className="weather-icon" 
          onError={handleIconError}
        />
      )}

      {main && <h1>{Math.round(main.temp)}°C</h1>}

      <div className="weather-location">
        <h2>{cityName}</h2>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      {weather && weather[0] && (
        <div className="weather-details">
          <p>{weather[0].main}</p>
          {main && <p>Humidity: {main.humidity}%</p>}
          {wind && <p>Wind: {wind.speed} m/s</p>}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
