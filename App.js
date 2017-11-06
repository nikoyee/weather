import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherRow from './containers/WeatherRow';


/**
 * Global Variables
 */

const data = require('./assets/weather.json');
const today = new Date();

let weatherObj = [[0],[1],[2],[3],[4]];

/**
 * Date object does not have a native way to add days x_x
 * https://stackoverflow.com/questions/563406/add-days-to-javascript-date
 */

Date.prototype.addDays = function(days) {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

export default class App extends React.Component {

  _populateWeatherObject(){
    for(let d of data.list){
      let dd = (d.dt_txt).replace(/\s/g, "T").concat("Z");
      let day = new Date(dd);

      /**
       * There are 5 days worth of data entries and
       * we need to modify the data for our app to use
       */

      switch (day.toDateString()) {
        case (today.toDateString()):
          weatherObj[0].push(d);
          break;
        case (today.addDays(1).toDateString()):
          weatherObj[1].push(d);
          break;
        case (today.addDays(2).toDateString()):
          weatherObj[2].push(d);
          break;
        case (today.addDays(3).toDateString()):
          weatherObj[3].push(d);
          break;
        case (today.addDays(4).toDateString()):
          weatherObj[4].push(d);
          break;
        default:
          console.log(day);
          break;
      }

    }
    console.log(weatherObj[0].length);
  }

  render() {
    this._populateWeatherObject();
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
