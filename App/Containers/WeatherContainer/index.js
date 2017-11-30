import React from 'react'
import {
  ScrollView,
  RefreshControl,
  Button
} from 'react-native'
import Weather from '../../Classes/Weather'
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

  _onRefresh = () => {
    Weather.refreshData()
  }

  render(){
    return(
      <ScrollView>
        {this.getAllWeather()}
        <Button onPress={this._onRefresh} title='Refresh' color='#000'/>
      </ScrollView>
    )
  }
}
