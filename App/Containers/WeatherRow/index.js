import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import Weather from '../../Classes/Weather'
import WeatherBox from '../WeatherBox'
import Styles from './styles'
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
      <View style={Styles.rowContainer}>
        <View style={Styles.dayContainer}>
          <Text style={Styles.dayFont}>{this.props.day[0]}</Text>
          <Text style={Styles.dayFont}>{this.props.day[1]}</Text>
          <Text style={Styles.dayFont}>{this.props.day[2]}</Text>
        </View>
        <View style={Styles.scrollViewContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this._getDayWeather(this.props.day)}
          </ScrollView>
        </View>
      </View>
    )
  }
}
