import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'

import PaddingTop from './App/Containers/PaddingTop'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <PaddingTop/>
        <View style={Styles.mainContainer}>

        </View>
      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
   }
})
