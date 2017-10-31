import React from 'react';
import WeatherRow from './components/WeatherRow.js';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  // getWeatherData(){
  //   fetch('')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.list;
  //     })
  //     .catch((error) => { console.error(error) }
  //   )
  // }

  // organizeDataByDay(weatherObj){
  //   let d = {};
  //   weatherObj.forEach(function(e) {
  //     let a = {};
  //     let date = new Date(e.dt_txt).getDate();
  //      d[date] = a;
  //   });
  // }

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
