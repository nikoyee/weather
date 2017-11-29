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
  _getDayWeather = () => {

    if(this.state.isDataSet){
      return(
        <View style={Styles.rowContainer}>
          <View style={Styles.dayContainer}>
            <Text style={Styles.dayFont}>{this.props.day[0]}</Text>
            <Text style={Styles.dayFont}>{this.props.day[1]}</Text>
            <Text style={Styles.dayFont}>{this.props.day[2]}</Text>
          </View>
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
      </View>
      )
    }
  }

  componentDidMount(){
    Weather.getDayWeather(this.props.day)
    .then( results => {
      console.log('component did mount')
      this.setState({
        isDataSet: true,
        data: results
      })
    })
  }
  render(){
    return(
      <View>
        {this._getDayWeather()}
      </View>
    )
  }
}
