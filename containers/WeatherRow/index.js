import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles.js'

export default class WeatherRow extends React.Component {

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
          <Text style={styles.temp}>69</Text>
        </View>
      </View>
    );
  }
}

