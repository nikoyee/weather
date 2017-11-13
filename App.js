import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'
import WeatherBox from './App/Containers/WeatherBox'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  getWeatherBox = (obj) => {
    return (
      <WeatherBox
        key={obj.key}
        date={obj.date}
        temp={obj.temp}
        tempIcon={obj.tempIconPath}
        weatherIcon={obj.weatherIconPath}
      />
    )
  }

  outputCubes = (obj) => {
    const dayArr = [
      [null],
      [1, 'Mon'],
      [2, 'Tue'],
      [3, 'Wed'],
      [4, 'Thu'],
      [5, 'Fri'],
      [6, 'Sat'],
      [7, 'Sun']
    ]
    return obj.map(function (d) {
      const weatherBoxData = {
        key: d.dt,
        temp: Math.floor(d.main.temp),
        date: dayArr[(new Date(d.dt_txt).getDay())][0],
        tempIconPath: './App/Assets/Icons/fahrenheit.png',
        weatherIconPath: ''
      }
      const desc = d.weather[0].main
      switch(desc){
        case('Clear'):
          getWeatherBox(weatherBoxData)
          break;
        case('Clouds'):
          getWeatherBox(weatherBoxData)
          break;
        case('Rain'):
          getWeatherBox(weatherBoxData)
          break;
        default:
          getWeatherBox(weatherBoxData)
          break;
      }
    })
  }

  render() {
    const data = require('./App/Assets/weather.json')
    return (
      <ScrollView>
        <PaddingTop/>
        <View style={Styles.mainContainer}>
          {this.outputCubes(data.list)}
        </View>
      </ScrollView>
    )
  }
}


const Styles = StyleSheet.create({
  mainContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap',
   }
})
