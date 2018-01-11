import React from 'react'
import WeatherChart from './WeatherChart'

const DashboardWeather = () => {
  return (
    <div className="body-split">
      <div className="today-weather-container">
        <div>
          <span className="tickets-section-title">TODAY'S FORECAST</span>
        </div>
        <div>
          icon and number
        </div>
        <div>
          explaination: clear..
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
