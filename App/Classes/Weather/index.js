import clearSkyIcon from '../../Assets/Icons/clear-sky.png'
import cloudyIcon from '../../Assets/Icons/few-clouds.png'
import rainIcon from '../../Assets/Icons/rain.png'

export default class Weather {
  constructor(){
    this.data = require('../../Assets/weather.json')
    this.weatherList = data.list
    this.dayArr = [
      [null],
      [1, 'Mon'],
      [2, 'Tue'],
      [3, 'Wed'],
      [4, 'Thu'],
      [5, 'Fri'],
      [6, 'Sat'],
      [7, 'Sun']
    ]
  }

  getTempIcon = (description) => {
    switch(description){
      case('Clear'):
        return clearSkyIcon
        break
      case('Clouds'):
        return cloudyIcon
        break
      case('Rain'):
        return rainIcon
        break
      default:
        return null
        break
    }
  }

  /**
   *  dayPicked is a string that must match the strings in dayArr
   *  [1, 'Mon']
   *  [2, 'Tue']
   *  [3, 'Wed']
   *  [4, 'Thu']
   *  [5, 'Fri']
   *  [6, 'Sat']
   *  [7, 'Sun']
   */
  getDayWeather = (dayPicked) => {
    weatherList.map(
      (weather) => {
        let numberForDayArr = new Date(weather.dt_txt).getDay()
        let day = dayArr[numberForDayArr][0]
        if(day == dayPicked){
          return {
            key: weather.dt_txt,
            temp: Math.floor(weather.temp),
            time: new Date(weather.dt_txt).getHours(),
            tempIcon: getTempIcon(weather.weather[0].main)
          }
        }
      }
    )
  }
}
