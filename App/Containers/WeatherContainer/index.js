import React from 'react'
import {
  View
} from 'react-native'
import WeatherRow from '../WeatherRow'

export default class WeatherContainer extends React.Component {
  constructor(props){
    super(props)
  }

  weatherStartingToday = () => {
    const today = new Date().getDay()
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
    return(
      <View>
        <WeatherRow day={dayArr[today][1]} />
        <WeatherRow day={dayArr[today+1][1]} />
        <WeatherRow day={dayArr[today+2][1]} />
        <WeatherRow day={dayArr[today+3][1]} />
        <WeatherRow day={dayArr[today+4][1]} />
      </View>
    )
  }

  render(){
    return(
      <View>
        {this.weatherStartingToday()}
      </View>
    )
  }
}
