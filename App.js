import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'
import WeatherRow from './App/Containers/WeatherRow'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <PaddingTop/>
        <View style={Styles.mainContainer}>
          <WeatherRow day={'Mon'}/>
          <WeatherRow day={'Tue'}/>
          <WeatherRow day={'Wed'}/>
          <WeatherRow day={'Thu'}/>
          <WeatherRow day={'Fri'}/>
          <WeatherRow day={'Sat'}/>
          <WeatherRow day={'Sun'}/>
        </View>
      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   }
})
