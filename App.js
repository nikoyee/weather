import React, {Component} from 'react'
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import Weather from './App/Classes/Weather'
import WeatherContainer from './App/Containers/WeatherContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
    // Weather.refreshData()
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.mainContainer}>
          <WeatherContainer />
        </View>
      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 30
   }
})
