import React from 'react'
import WeatherChart from './WeatherChart'

const DashboardWeather = () => {
  return (
    <div className="dash-body-split">
      <div >
        <div className="graph-title-container">
          <span className="dash-title">Today In Boulder</span>
        </div>

        <div>
          <div className="today-weather-container">
            <div className="forecast-icon"></div>
            <div>
              <span className="forecast-weather-title">PARTLY CLOUDY / 49</span>
            </div>
          </div>
        </div>

      </div>


      <div>
        <div className="graph-title-container">
          <span className="dash-title">Weekly Weather Forecast</span>
        </div>

        <div className="forecast-weather-container">
          <div className="weekly-forcast-container">
            <WeatherChart />
          </div>
        </div>

      </div>





{/*
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
      </div> */}

    </div>

  )
}

export default DashboardWeather
