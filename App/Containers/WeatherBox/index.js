import React, {Component} from 'react'
import {
  View
} from 'react-native'

import Styles from './styles'
import clearIcon from '../../Assets/Icons/clear-sky.png'
import cloudIcon from '../../Assets/Icons/few-clouds.png'
import rainIcon from '../../Assets/Icons/rain.png'

export default class WeatherBox extends Component {
  constructor(props){
    super(props)
  }
  /**
    <View key={this.props.key} Style={Styles.blueBox}>
      <View style={Styles.centerItems}>
        <Text>{this.props.date}</Text>
        <Image style={Styles.icon} source={this.props.weatherIcon} resizeMode='contain' />
        <Text>{this.props.temp}<Image style={Styles.tempIcon} source={this.props.tempIcon} /></Text>
      </View>
    </View>
   */
  render(){
    return (
      <View>
        {/* Container for a weather box */}
      </View>
    )
  }
}
