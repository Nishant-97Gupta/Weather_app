import axios from 'axios';

const API_KEY = 'cd163796e313d34b7841dc29dac97085'; 

export const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

export const getWeatherDataByLocation = async (latitude, longitude) => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

  try {
    const weatherResponse = await axios.get(weatherUrl);
    const { name: city, sys: { country } } = weatherResponse.data;

    return {
      ...weatherResponse.data,
      city,
      country,
    };
  } catch (error) {
    console.error('Error fetching location-based weather data:', error);
    return null;
  }
};
