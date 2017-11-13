import {React} from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import Styles from './styles'

export default class WeatherBox extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View key={this.props.key} Style={Styles.blueBox}>
        <View style={Styles.centerItems}>
          <Text>{this.props.date}</Text>
          <Image style={Styles.icon} source={this.props.weatherIcon} resizeMode='contain' />
          <Text>{this.props.temp}<Image style={Styles.tempIcon} source={this.props.tempIcon} /></Text>
        </View>
      </View>
    )
  }
}
