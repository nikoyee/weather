import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  outputCubes = (obj) => {
    return obj.map(function (d) {
      const key  = d.dt
      const temp = Math.floor(d.main.temp)
      const desc = d.weather[0].description
      switch(desc){
        case('clear sky'):
          return (
            <View key={key} style={Styles.cubeYellow}>
              <Text>{temp}</Text>
              <Text>{desc}</Text>
            </View>
          )
          break;
        case('few clouds'):
          return (
            <View key={key} style={Styles.cubeBlue}>
              <Text>{temp}</Text>
              <Text>{desc}</Text>
            </View>
          )
          break;
        default:
          return (
            <View key={key} style={Styles.cubeNone}>
              <Text>{temp}</Text>
              <Text>{desc}</Text>
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
  flexWrap: 'wrap'  
}

const Styles = StyleSheet.create({
  mainContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap'
   },
  cubeBlue: {
    ...cubeContainer,
    backgroundColor: '#9ebbc6'
  },
  cubeYellow: {
    ...cubeContainer,
    backgroundColor: '#fdfd96'
  },
  cubeNone: {
    ...cubeContainer
  }
})
