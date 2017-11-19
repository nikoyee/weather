import React, {Component} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import Styles from './styles'
import ClearIcon from '../../Assets/Icons/clear-sky.png'
import CloudIcon from '../../Assets/Icons/few-clouds.png'
import RainIcon from '../../Assets/Icons/rain.png'
import FahrenheitIcon from '../../Assets/Icons/fahrenheit.png'

export default class WeatherBox extends Component {
  constructor(props){
    super(props)
  }

  _getBoxColor = (tempDescription) => {
    switch(tempDescription){
      case('Clear'):
        return Styles.yellowBox
        break
      case('Clouds'):
        return Styles.blueBox
        break
      case('Rain'):
        return Styles.purpleBox
        break
      default:
        return Styles.box
        break
    }
  }
  _getWeatherIcon = (tempDescription) => {
    switch(tempDescription){
      case('Clear'):
        return ClearIcon
        break
      case('Clouds'):
        return CloudIcon
        break
      case('Rain'):
        return RainIcon
        break
      default:
        return null
        break
    }
  }

  _getPrettyTime = (time) => {
    if (time == 0) { return '12 AM' }
    else if (time < 11) { return time + ' AM'}
    else if (time == 12) { return ' 12 PM'}
    else { return (time-12) + ' PM' }
  }

  render(){
    return (
      <View style={this._getBoxColor(this.props.tempDescription)}>
        <View style={Styles.centerItems}>
          <Text>{this._getPrettyTime(this.props.time)}</Text>
          <Image style={Styles.icon} source={this._getWeatherIcon(this.props.tempDescription)} resizeMode='contain' />
          <Text>{this.props.temp}<Image style={Styles.tempIcon} source={FahrenheitIcon} /></Text>
        </View>
      </View>
    )
  }
}
