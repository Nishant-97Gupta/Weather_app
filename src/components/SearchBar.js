import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../api/weatherApi';
import '../style/SearchBar.css';

const SearchBar = ({ onSearchResult, toggleSummaryView }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [error, setError] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const API_KEY = 'cd163796e313d34b7841dc29dac97085';

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    const timestamp = localStorage.getItem('searchTimestamp');
    const tenMinutes = 10 * 60 * 1000;

    if (storedSearches && timestamp) {
      const now = new Date().getTime();

      if (now - timestamp < tenMinutes) {
        setRecentSearches(JSON.parse(storedSearches));
      } else {
        localStorage.removeItem('recentSearches');
        localStorage.removeItem('searchTimestamp');
      }
    }
  }, []);

  const fetchCitySuggestions = async (query) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data);
    } catch (err) {
      setError('Error fetching city suggestions.');
      setSuggestions([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      fetchCitySuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setQuery(city.name);
    setSuggestions([]);
  };

  const handleGetWeather = async () => {
    if (selectedCity) {
      try {
        const weatherData = await getWeatherData(selectedCity.name);
        onSearchResult(weatherData);

        const updatedSearches = [...recentSearches, selectedCity.name];
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
        localStorage.setItem('searchTimestamp', new Date().getTime());

        setError('');
      } catch (err) {
        setError('Could not fetch weather data for the selected city.');
      }
    } else {
      setError('Please select a city.');
    }
  };

  const handleRecentSearchClick = async (cityName) => {
    setQuery(cityName);
    try {
      const weatherData = await getWeatherData(cityName);
      onSearchResult(weatherData);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data for the selected city.');
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-section">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search here"
          className="search-input"
        />
        <button onClick={handleGetWeather} className="search-btn">
          Search
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => handleSelectCity(city)}>
              {city.name}, {city.state || ''}, {city.country}
            </li>
          ))}
        </ul>
      )}

      <div className="recent-searches">
        <h3>Recent search</h3>
        <ul>
          {recentSearches.map((city, index) => (
            <li key={index} onClick={() => handleRecentSearchClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>

      {error && <p className="error-message">{error}</p>}

      <p className="toggle-summary-text" onClick={toggleSummaryView}>
        Today Weather Summary
      </p>
      <p1 class="name1">Developed By- Nishant Gupta</p1>
    </div>
  );
};

export default SearchBar;
