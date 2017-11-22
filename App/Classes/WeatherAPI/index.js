import {AsyncStorage} from 'react-native'
import Config from '../../config'

const getURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.69&lon=-122.15&mode=json&units=imperial&appid='+Config.APP_ID

export default class WeatherAPI {
  getWeatherData = () => {
    fetch(getURL)
    .then(results => {
      this.setWeatherData(results.json())
      this.setUpdatedAt()
      return results.json()
    }).catch(error => {
      console.error(error)
    })
  }

  setUpdatedAt = () => {
    try {
      await AsyncStorage.setItem('updated_at', new Date())
      return true
    } catch (error) {
      console.error(error)
    }
  }

  getUpdatedAt = () => {
    try {return await AsyncStorage.getItem('updated_at')}
    catch (error) {console.error(error)}
  }

  setWeatherData = (w) => {
    if (w) {
      try {
        await AsyncStorage.setItem('weather', JSON.stringify(w))
        return true
      } catch (error) {console.error(error)}
    } else {return null}
  }

  getStoredWeatherData = () => {
    try {return await AsyncStorage.getItem('weather')}
    catch (error) {console.error(error)}
  }

  isOldWeatherData = () => {
    const now = new Date()
    get
  }

}
