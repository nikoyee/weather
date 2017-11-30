import React, {Component} from 'react'
import {
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native'

import Weather from '../../Classes/Weather'
import WeatherBox from '../WeatherBox'
import Styles from './styles'
export default class WeatherRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      isDataSet: false,
      data: false
    }
  }

  componentDidMount(){
    Weather.getDayWeather(this.props.day)
    .then( results => {
      if(results.length != 0){
        this.setState({
          isDataSet: true,
          data: results
        })
      }
    })
  }

  showDayVertical = () => {
    return (
      <View style={Styles.dayContainer}>
        <Text style={Styles.dayFont}>{this.props.day[0]}</Text>
        <Text style={Styles.dayFont}>{this.props.day[1]}</Text>
        <Text style={Styles.dayFont}>{this.props.day[2]}</Text>
      </View>
    )
  }

  showDayBoxes = () => {
    return (
      <View style={Styles.scrollViewContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} bonces={false}>
          {this.state.data.map(
            (weather) => {
              return <WeatherBox
                key = {weather.key}
                temp = {weather.temp}
                time = {weather.time}
                tempDescription = {weather.tempDescription}
              />
            }
          )}
        </ScrollView>
      </View>
    )
  }

  getWeatherRow = () => {
    if(this.state.isDataSet && this.state.data){
      return(
        <View style={Styles.rowContainer}>
          {this.showDayVertical()}
          {this.showDayBoxes()}
        </View>
      )
    }
  }

  render(){
    return(
      <View>
        {this.getWeatherRow()}
      </View>
    )
  }
}
