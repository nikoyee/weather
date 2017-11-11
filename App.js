import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  outputCubes = (obj) => {

    test = (num) => {
      switch(num){
        case(1):
          return 'Mon'
          break;
        case(2):
          return 'Tue'
          break;
        case(3):
          return 'Wed'
          break;
        case(4):
          return 'Thu'
          break;
        case(5):
          return 'Fri'
          break;
        case(6):
          return 'Sat'
          break;
        case(7):
          return 'Sun'
          break;
        default:
          return '?'
          break;
      }
    }

    return obj.map(function (d) {
      const key  = d.dt
      const temp = Math.floor(d.main.temp)
      const desc = d.weather[0].main
      const date = test(new Date(d.dt_txt).getDay())
      switch(desc){
        case('Clear'):
          return (
            <View key={key} style={Styles.cubeYellow}>
              
              <View style={Styles.centerIcon}>
                <Text>{date} at 2PM</Text>
                <Image style={Styles.icon} resizeMode='contain' source={require('./App/Assets/Icons/clear-sky.png')}/>
                <Text>{temp}<Image style={Styles.tempIcon} source={require('./App/Assets/Icons/fahrenheit.png')}/>  </Text>
              </View>
              
            </View>
          )
          break;
        case('Clouds'):
          return (
            <View key={key} style={Styles.cubeBlue}>
              <View style={Styles.centerIcon}>
                <Text>{date}</Text>
                <Image style={Styles.icon} resizeMode='contain' source={require('./App/Assets/Icons/broken-clouds.png')}/>
                <Text>{temp}<Image style={Styles.tempIcon} source={require('./App/Assets/Icons/fahrenheit.png')}/>  </Text>
              </View>
            </View>
          )
          break;
        case('Rain'):
          return (
            <View key={key} style={Styles.codePurple}>
              <View style={Styles.centerIcon}>
                <Text>{date}</Text>
                <Image style={Styles.icon} resizeMode='contain' source={require('./App/Assets/Icons/rain.png')}/>
                <Text>{temp}<Image style={Styles.tempIcon} source={require('./App/Assets/Icons/fahrenheit.png')}/>  </Text>
              </View>
            </View>
          )
          break;
        default:
          return (
            <View key={key} style={Styles.cubeNone}>
              <Text>{temp}</Text>
            </View>
          )
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

const cubeContainer = { 
  height: 100,
  width: '33.3%', 
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const Styles = StyleSheet.create({
  mainContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap',
   },
  centerIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tempIcon:{
    height: 12,
    width: 12
  },
  icon: {
    height: 40,
    width: 40,
    marginBottom: 7,
    marginTop: 7
  },
  cubeBlue: {
    ...cubeContainer,
    backgroundColor: '#9ebbc6'
  },
  cubeYellow: {
    ...cubeContainer,
    backgroundColor: '#fdfd96'
  },
  codePurple: {
    ...cubeContainer,
    backgroundColor: '#DAC2DD'
  },
  cubeNone: {
    ...cubeContainer
  }
})
