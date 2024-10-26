import { useState, useEffect } from 'react';
import { getWeatherDataByLocation } from '../api/weatherApi';

const useWeatherData = () => {
  const [currentLocationWeather, setCurrentLocationWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const weatherData = await getWeatherDataByLocation(latitude, longitude);
            setCurrentLocationWeather(weatherData);
          } catch (err) {
            setError('Unable to fetch weather data for your location.');
          }
        },
        () => {
          setError('Location access denied.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  return { currentLocationWeather, error };
};

export default useWeatherData;
