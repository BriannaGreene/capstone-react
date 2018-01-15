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
              <span className="forecast-weather-title">CLEAR / 53</span>
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
            <div className="forecast">
              <div className="weather-text">THU</div>
              <div id="weather-icon-1" className="partly-cloudy"></div>
              <div className="weather-text">61</div>
            </div>
            <div className="forecast">
              <div className="weather-text">FRI</div>
              <div id="weather-icon-1" className="partly-cloudy"></div>
              <div className="weather-text">62</div>
            </div>
            <div className="forecast">
              <div className="weather-text">SAT</div>
              <div id="weather-icon-1" className="snowy"></div>
              <div className="weather-text">35</div>
            </div>
            <div className="forecast">
              <div className="weather-text">SUN</div>
              <div id="weather-icon-1" className="snowy-showers"></div>
              <div className="weather-text">37</div>
            </div>
            <div className="forecast">
              <div className="weather-text">MON</div>
              <div id="weather-icon-1" className="snowy-showers"></div>
              <div className="weather-text">44</div>
            </div>
            <div className="forecast">
              <div className="weather-text">TUE</div>
              <div id="weather-icon-1" className="snowy"></div>
              <div className="weather-text">43</div>
            </div>
            <div className="forecast">
              <div className="weather-text">WED</div>
              <div id="weather-icon-1" className="snowy"></div>
              <div className="weather-text">41</div>
            </div>
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
