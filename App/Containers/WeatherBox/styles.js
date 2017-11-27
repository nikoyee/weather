import {StyleSheet} from 'react-native'

const container = {marginRight: 8}

export default Styles = StyleSheet.create(
  {
    centerItems: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 75,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
      marginLeft: 10,
      marginRight: 10
    },
    tempIcon:{
      height: 12,
      width: 12
    },
    icon: {
      height: 40,
      width: 40,
      marginBottom: 7,
      marginTop: 7,
    },
    blueBox: {
      ...container,
      backgroundColor: '#ffa5a6'
    },
    yellowBox: {
      ...container,
      backgroundColor: '#ffd1d2'
    },
    purpleBox: {
      ...container,
      backgroundColor: '#c37a7b'
    }
  }
)
