import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

const DashboardWeather = ( state ) => {
  let currentSummary = ''
  let currentTemp = ''
  let day1high = ''
  let day1low = ''
  let day2high = ''
  let day2low = ''
  let day3high = ''
  let day3low = ''
  let day4high = ''
  let day4low = ''
  let day5high = ''
  let day5low = ''
  let day6high = ''
  let day6low = ''
  let day7high = ''
  let day7low = ''
  let class1 = ''
  let class2 = ''
  let class3 = ''
  let class4 = ''
  let class5 = ''
  let class6 = ''
  let class7 = ''

  let possibleIcons = ["clear-day", "clear-night", "sleet", "fog", "cloudy", "partly-cloudy-day", "partly-cloudy-night", "snow", "wind", "rain", "hail", "thunderstorm"]

  if (state.weather !== null) {
    currentSummary = state.weather.currentSummary
    currentTemp = Math.round(state.weather.currentTemperature)
    day1high = Math.round(state.weather.daily1TempHigh)
    day1low = Math.round(state.weather.daily1TempLow)
    day2high = Math.round(state.weather.daily2TempHigh)
    day2low = Math.round(state.weather.daily2TempLow)
    day3high = Math.round(state.weather.daily3TempHigh)
    day3low = Math.round(state.weather.daily3TempLow)
    day4high = Math.round(state.weather.daily4TempHigh)
    day4low = Math.round(state.weather.daily4TempLow)
    day5high = Math.round(state.weather.daily5TempHigh)
    day5low = Math.round(state.weather.daily5TempLow)
    day6high = Math.round(state.weather.daily6TempHigh)
    day6low = Math.round(state.weather.daily6TempLow)
    day7high = Math.round(state.weather.daily7TempHigh)
    day7low = Math.round(state.weather.daily7TempLow)

    for (var i = 0; i < possibleIcons.length; i++) {
      if (state.weather.daily1Icon === possibleIcons[i]) { class1 = possibleIcons[i] }
      if (state.weather.daily2Icon === possibleIcons[i]) { class2 = possibleIcons[i] }
      if (state.weather.daily3Icon === possibleIcons[i]) { class3 = possibleIcons[i] }
      if (state.weather.daily4Icon === possibleIcons[i]) { class4 = possibleIcons[i] }
      if (state.weather.daily5Icon === possibleIcons[i]) { class5 = possibleIcons[i] }
      if (state.weather.daily6Icon === possibleIcons[i]) { class6 = possibleIcons[i] }
      if (state.weather.daily7Icon === possibleIcons[i]) { class7 = possibleIcons[i] }
    }
  }

  return (
    <div className="dash-body-split">
      <div className="dash-body-left" >
        <div className="graph-title-container">
          <span className="dash-title">Today In Boulder</span>
        </div>
        <div>
          <div className="today-weather-container">
            <div className="forecast-icon"></div>
            <div>
              <span className="forecast-weather-title">{currentSummary} / {currentTemp}</span>
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
              <div className="weather-text">{day1high}</div>
              <div id="weather-icon-1" className={class1}></div>
              <div className="weather-text">{day1low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day2high}</div>
              <div id="weather-icon-1" className={class2}></div>
              <div className="weather-text">{day2low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day3high}</div>
              <div id="weather-icon-1" className={class3}></div>
              <div className="weather-text">{day3low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day4high}</div>
              <div id="weather-icon-1" className={class4}></div>
              <div className="weather-text">{day4low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day5high}</div>
              <div id="weather-icon-1" className=
                {class5}></div>
              <div className="weather-text">{day5low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day6high}</div>
              <div id="weather-icon-1" className={class6}></div>
              <div className="weather-text">{day6low}</div>
            </div>
            <div className="forecast">
              <div className="weather-text">{day7high}</div>
              <div id="weather-icon-1" className={class7}></div>
              <div className="weather-text">{day7low}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ weather, auth, users }) {
  return { weather, auth, users }
}

export default connect(mapStateToProps)(DashboardWeather)
