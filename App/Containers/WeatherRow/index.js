import React, {Component} from 'react'
import {
  View
} from 'react-native'

import Weather from '../../Classes/Weather'
import WeatherBox from '../WeatherBox'

export default class WeatherRow extends Component {
  render(){
    return(
      <View>
        <View>
          {/* Contains the day string */}
        </View>
        <View>
          {/* Contains the weather box for the day */}
        </View>
      </View>
    )
  }
}
