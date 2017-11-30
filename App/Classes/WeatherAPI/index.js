import {AsyncStorage} from 'react-native'
import CONFIG from '../../config'

class WeatherAPI {
  getWeatherData = () => {
    fetch(CONFIG.GET_URL)
    .then(results => {
      return results.json()
    })
    .then(data => {
      if (data.cod == '200') {
        this.setStoredWeatherData(data)
        this.setUpdatedAt()
        alert('we hit GOLD!')
      }
      else {return false}
    })
    .catch(error => {console.error(error)})
  }

  isStoredWeatherDataOld = () => {
    return this.getUpdatedAt().then(updatedAtDate => {
      const now = new Date()
      const updateddAt = new Date(updatedAtDate)
      if ((now - updateddAt) > CONFIG.MILISECOND_OF_3_HOURS) {
        return true
      } else {
        return false
      }
    }).catch(error => {
      return true
    })
  }

  setUpdatedAt = () => {
    try {AsyncStorage.setItem('updated_at', new Date())}
    catch (error) {console.error(error)}
  }
  setStoredWeatherData = (data) => {
    if (data) {
      try {AsyncStorage.setItem('weather', JSON.stringify(data))}
      catch (error) {console.error(error)}
    } else {return false}
  }

  getStoredWeatherData = () => {
    try {
      return AsyncStorage.getItem('weather')
    }
    catch (error) {console.error(error)}
  }

  getUpdatedAt = () => {
    try {return AsyncStorage.getItem('updated_at')}
    catch (error) {console.error(error)}
  }
}

export default new WeatherAPI
