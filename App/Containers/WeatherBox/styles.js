import {StyleSheet} from 'react-native'

const boxContainer = {
  height: 100,
  width: '33.3%',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

export default Styles = StyleSheet.create(
  {
    centerItems: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    tempIcon:{
      height: 12,
      width: 12
    },
    icon: {
      height: 40,
      width: 40,
      marginBottom: 7,
      marginTop: 7
    },
    blueBox: {
      ...boxContainer,
      backgroundColor: '#9ebbc6'
    },
    yellowBox: {
      ...boxContainer,
      backgroundColor: '#fdfd96'
    },
    purpleBox: {
      ...boxContainer,
      backgroundColor: '#DAC2DD'
    },
    box: {
      ...boxContainer
    }
  }
)
