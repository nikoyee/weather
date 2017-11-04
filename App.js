import React from 'react';
import WeatherRow from './components/WeatherRow.js';
import { StyleSheet, Text, View } from 'react-native';

const data = require('./assets/weather.json');

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <WeatherRow></WeatherRow>
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
