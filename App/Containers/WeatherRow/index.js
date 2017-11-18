import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'

import Weather from '../../Classes/Weather'
import WeatherBox from '../WeatherBox'

export default class WeatherRow extends Component {
  _getDayWeather = (dayPicked) => {
    return Weather.getDayWeather(dayPicked).map(
      (weather) => {
        return <WeatherBox
          key = {weather.key}
          temp = {weather.temp}
          time = {weather.time}
          tempDescription = {weather.tempDescription}
        />
      }
    )
  }
  render(){
    return(
      <View>
        <View>
          {/* Contains the day string */}
          <Text></Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {/* Contains the weather box for the day */}
          {this._getDayWeather(this.props.day)}
        </View>
      </View>
    )
  }
}
