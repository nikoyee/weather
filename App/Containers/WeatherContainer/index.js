import React from 'react'
import {
  View
} from 'react-native'
import WeatherRow from '../WeatherRow'
export default class WeatherContainer extends React.Component {
  constructor(props){
    super(props)
  }

  getAllWeather = () => {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    return days.map((day) => {
      return <WeatherRow day={day} key={days.indexOf(day)} />
    })
  }

  render(){
    return(
      <View>
        {this.getAllWeather()}
      </View>
    )
  }
}
