# Weather Monitoring Application 🌤️
This is a fully functional Weather Monitoring App that allows users to search for weather information of different cities and view their current weather, daily weather summary, and recent searches. The app dynamically adjusts based on real-time weather conditions, displaying customized weather icons and providing a responsive, user-friendly interface with an engaging GIF background.

# Table of Contents
Folder Structure,
Tech Stack,
Features,
Application Flow,
Screenshots,
Installation,
Usage,
Responsive Design,
Future Enhancements


# Folder Structure:

public folder
1.index.html
2.Icons for weather conditions (e.g., 01d.png, 02n.png)
3.Background images including a GIF used for weather visualization
4.Screenshots for documentation
5.xa.gif - a GIF background for enhanced UI


src
   1.api: Contains weatherApi.js for API calls to OpenWeather.
2.components: Holds React components:
     a.WeatherCard.js: Displays the current weather.
     b.SearchBar.js: Provides the search functionality for weather information by city.
     c.DailyWeatherSummary.js: Displays a summary of daily weather data.
3.hooks: Contains useWeatherData.js, a custom hook to fetch weather data.
4.style: Holds the styling files:
      a.WeatherCard.css: Styling for the weather card.
      b.SearchBar.css: Styling for the search bar.
     c.styles.css: Global styles for the entire application.
5.App.js: The main component that brings everything together.
6.index.js: The entry point for the React app.
7.package.json: Contains the project dependencies and scripts.

# Tech Stack
React: JavaScript library for building user interfaces
OpenWeather API: Real-time weather data provider
CSS (Flexbox): For responsive styling and layout
JavaScript: Application logic
Axios: HTTP client for API requests
LocalStorage: Storing recent searches for quick access
GIF Background: Enhances the UI using dynamic animated backgrounds based on weather conditions

# Features
      Current Weather: Displays temperature, weather conditions, humidity, and wind speed for the user's current location or any searched city.
     Custom Weather Icons: Custom icons that reflect weather conditions, with a fallback to OpenWeather icons.
    Recent Searches: Displays recent city searches in a scrollable list for quick access.
     Daily Weather Summary: Shows the average, max, and min temperature for the day, along with the dominant weather condition.
     Weather Alerts: Alerts for temperatures exceeding a specified threshold.
    GIF Background: A dynamic and visually appealing animated background enhances the app's UI, adjusting based on weather conditions.
    Responsive Design: App layout adjusts seamlessly across all devices using CSS Flexbox. The application is optimized for both short screens and large displays, ensuring 
                    a user-friendly experience regardless of device size.


# Application Flow
Weather Data Fetching: Weather data is fetched from the OpenWeather API for the current location or any city searched by the user.
City Search with Suggestions: The search bar provides real-time suggestions based on input.
Weather Card: Displays temperature, wind speed, and weather condition for the selected city.
Recent Searches: Keeps track of recent city searches and allows users to reselect them.
Daily Weather Summary: Shows the weather summary, including temperature details and conditions for the entire day.
Custom Icons: Custom icons for each weather condition are rendered. If the icon isn't available, it defaults to OpenWeather icons.
GIF Background: Provides a dynamic atmosphere to the app based on weather, enhancing the user experience.


# Screenshots:
 1. Main Weather Display
![Main Weather Display](public/screenshots/main-weather-display.png)

 2. City Search Functionality
![City Search](public/screenshots/city-search.png)

 3. Daily Weather Summary
![Daily Weather Summary](public/screenshots/daily-summary.png)

 5. Responsive Layout
![Responsive Layout](public/screenshots/responsive-layout.png)


# Installation
Clone the repository:
git clone https://github.com/Nishant-97Gupta/Weather_app.git
cd weather_app

# Install the dependencies:
npm install

# Run the app
npm start

# Open the app in your browser at http://localhost:3000.


# Usage
Search for Weather: Type a city name in the search bar and view the weather conditions.
Current Location: Allow location access to see weather data for your current position.
Recent Searches: Quickly view weather for previously searched cities.
Toggle Daily Summary: Switch to the daily summary for average, max, and min temperatures.


# Responsive Design
The app is fully responsive, adjusting its layout dynamically using CSS Flexbox to cater to different screen sizes, including short screens. The app ensures a seamless experience on mobile devices, tablets, and desktops:

Flexbox is utilized to handle layouts, ensuring components resize proportionally to the viewport.
Weather cards, search bars, and other UI components are flexed to adapt smoothly to different screen dimensions, making the app scalable across devices.


# Future Enhancements
Push notifications for weather alerts.
Enhanced daily weather history tracking.
Additional weather data providers for richer insights.

