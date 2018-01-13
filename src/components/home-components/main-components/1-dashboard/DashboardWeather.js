import React from 'react'
import WeatherChart from './WeatherChart'

const DashboardWeather = () => {
  return (
    <div className="body-split">
      <div className="today-weather-container">
        <div>
          <span className="forecast-weather-title">TODAY IN BOULDER</span>
        </div>
        <div className="forecast-icon">
          
        </div>
        <div>
          <span className="forecast-weather-title">PARTLY CLOUDY / 49</span>
        </div>
      </div>
      <div className="forecast-weather-container">
        <div>
          <span className="tickets-section-title">THIS WEEK'S WEATHER FOR DENVER</span>
        </div>
        <div className="weekly-forcast-container">
          <WeatherChart />
        </div>
      </div>
    </div>

  )
}

export default DashboardWeather
