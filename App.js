import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherRow from './containers/WeatherRow';
import WeatherData from './assets/weather.json';

/**
 * Date object does not have a native way to add days x_x
 * https://stackoverflow.com/questions/563406/add-days-to-javascript-date
 */

Date.prototype.addDays = (days) => {
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
}

export default class App extends React.Component {

  constructor(props){
    super(props)
  }

  iterateWeatherData = () => {

    /**
     * Local variable to this function.
     */

    let today = new Date();
    let weatherArr = [[0],[1],[2],[3],[4]];

    /**
     * Itirate over each element of WeatherData.list and use the date object create to
     * organize the data by day.
     */

    (WeatherData.list).map(
      (d) => {
        let day = new Date(d.dt_txt);
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
    )

    /**
     * Iterate over the organized data and output the WeatherRow component while
     * passing the data as prop for the component.
     */

    return weatherArr.map(
      (data) => {
        return <WeatherRow key={data[0]} />
      }
    )
    
  }

  render() {
    
    return (
      <View style={styles.container}>
        {this.iterateWeatherData()}
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
