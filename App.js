import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherRow from './containers/WeatherRow';


/**
 * Global Variables
 */

const data = require('./assets/weather.json');
const today = new Date();

/**
 * TODO:
 * 
 * Create a unique ID for each array element. A warning was spit out by react and told me
 * "You done goofed, get a unique id on your interable data structure so that you can git gud"
 */
let weatherArr = [[0],[1],[2],[3],[4]];

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

  populateWeatherArr = () => {
    for(let d of data.list){
      
      let dd = (d.dt_txt).replace(/\s/, "T");
      let day = new Date(dd);

      /**
       * There are 5 days worth of data entries and
       * we need to modify the data for our app to use
       */

      switch (day.toDateString()) {
        case (today.toDateString()):
          weatherArr[0].push(d);
          break;
        case (today.addDays(1).toDateString()):
          weatherArr[1].push(d);
          break;
        case (today.addDays(2).toDateString()):
          weatherArr[2].push(d);
          break;
        case (today.addDays(3).toDateString()):
          weatherArr[3].push(d);
          break;
        case (today.addDays(4).toDateString()):
          weatherArr[4].push(d);
          break;
        default:
          console.log(day.toDateString());
          break;
      }

    }
    console.log(weatherArr[0].length);
  }

  outputWeatherRow = weatherArr.map(
    (arr) => {
      return <WeatherRow key={arr}/>
    }
  )

  render() {
    return (
      <View style={styles.container}>
        {this.outputWeatherRow}
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
