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
    this.state = {
      boxStyle: 'none'
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

  render(){
    return (
      <View>
        <View style={Styles.centerItems}>
          <Text>{this.props.time}</Text>
          <Image style={Styles.icon} source={this._getWeatherIcon(this.props.tempDescription)} resizeMode='contain' />
          <Text>{this.props.temp}<Image style={Styles.tempIcon} source={FahrenheitIcon} /></Text>
        </View>
      </View>
    )
  }
}
