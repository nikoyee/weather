import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'


export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  outputCubes = (obj) => {
    return obj.map(function (d) {
      return (
        <View key={d.dt} style={{ width: '33.3%', height: 100, flexWrap: 'wrap' }}>
          <Text>{d.main.temp}</Text>
          <Text>{d.weather[0].description}</Text>
        </View>
      )
    })
  }

  render() {
    const data = require('./App/Assets/weather.json')
    return (
      <ScrollView>
        <PaddingTop/>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.outputCubes(data.list)}
        </View>
      </ScrollView>
    )
  }
}
