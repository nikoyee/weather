import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherRow from './containers/WeatherRow';


// Global Variables
const data = require('./assets/weather.json');
const today = new Date().toDateString();

let weatherObj = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {} };

// Date object does not have a native way to add days x_x
// https://stackoverflow.com/questions/563406/add-days-to-javascript-date
Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat.toDateString();
}

export default class App extends React.Component {

  _createWeatherObject(){
    for(let d of data.list){

      // Get the entries date without the time
      let day = new Date(d.dt_txt).toDateString();

      // There are 5 days worth of data entries
      // and we need to modify the data for our app to use
      switch (day) {
        case (day == today):
          break;
        case (day == today.addDays(1)):
          break;
        case (day == today.addDays(2)):
          break;
        case (day == today.addDays(3)):
          break;
        case (day == today.addDays(4)):
          break;
        default:
          break;
      }

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <WeatherRow data={weatherObj[0]}></WeatherRow>
        <WeatherRow data={weatherObj[1]}></WeatherRow>
        <WeatherRow data={weatherObj[2]}></WeatherRow>
        <WeatherRow data={weatherObj[3]}></WeatherRow>
        <WeatherRow data={weatherObj[4]}></WeatherRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 25
  }
});
