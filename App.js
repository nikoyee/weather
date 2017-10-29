import React from 'react';
import WeatherRow from './components/WeatherRow.js';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let days = {
      m: 'Mon',
      t: 'Tue',
      w: 'Wed',
      th: 'Thu',
      f: 'Fri'
    }
    return (
      <View style={styles.container}>
        <WeatherRow day={days.m}></WeatherRow>
        <WeatherRow day={days.t}></WeatherRow>
        <WeatherRow day={days.w}></WeatherRow>
        <WeatherRow day={days.th}></WeatherRow>
        <WeatherRow day={days.f}></WeatherRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25
  },
});
