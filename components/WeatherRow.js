import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';

const fahrenheitIcon = (<Icon name="hand-spock-o" size={30} color="#fff" />)

class WeatherRow extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.daysContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.days}>{this.props.day}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text ></Text>
        </View>
        <View style={{flex: 0.75}}>
          <Text style={styles.temp}>69 {fahrenheitIcon}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  days: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
    color: 'white',
  },
  temp: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  daysContainer: {
    flex: 1, 
    backgroundColor: '#27a4dd', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center'},
});

export default WeatherRow;
