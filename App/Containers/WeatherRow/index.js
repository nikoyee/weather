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
      <View style={{flexDirection: 'row', height: 100, paddingTop: 10, paddingBottom: 10}}>
        <View style={{width: '6%', alignItems: 'center', justifyContent: 'center'}}>
          <Text>{this.props.day[0]}</Text>
          <Text>{this.props.day[1]}</Text>
          <Text>{this.props.day[2]}</Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row'}}>
          {this._getDayWeather(this.props.day)}
        </View>
      </View>
    )
  }
}
