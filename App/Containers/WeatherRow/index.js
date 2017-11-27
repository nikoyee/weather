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
  constructor(props){
    super(props)
    this.state = {
      isDataSet: false,
      data: null
    }
  }
  _getDayWeather = (dayPicked) => {
    // console.log(Weather.getDayWeather(dayPicked))
    Weather.getDayWeather(dayPicked).then(results => {
      this.setState({
        isDataSet: true,
        data: results
      })
    })
    if(this.state.isDataSet){
      return this.state.data.map(
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
  }

  render(){
    if (Weather.getDayWeather(this.props.day).length == 0) {return null}
    return(
      <View style={Styles.rowContainer}>
        <View style={Styles.dayContainer}>
          <Text style={Styles.dayFont}>{this.props.day[0]}</Text>
          <Text style={Styles.dayFont}>{this.props.day[1]}</Text>
          <Text style={Styles.dayFont}>{this.props.day[2]}</Text>
        </View>
        <View style={Styles.scrollViewContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bonces={false}>
            {this._getDayWeather(this.props.day)}
          </ScrollView>
        </View>
      </View>
    )
  }
}
