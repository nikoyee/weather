/**
 * Personal Note:
 *
 * This felt sooooo right. My code smelled bad when i had so much logic inside my App.js about manipulating the
 * json data for the application. I created this class to give me the interface i needed to easily use the json data.
 */
import WeatherAPI from '../WeatherAPI'
class Weather {
  constructor(){
    // WeatherAPI.getWeatherData()
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

  /**
   *  daySelected is a string that must match the strings in dayArr
   */
  getDayWeather = (daySelected) => {
    let dataForWeatherRowComponent = []
    let dayArr = this.dayArr
    let weatherData = WeatherAPI.getStoredWeatherData()
    return weatherData.then(data =>{
      JSON.parse(data).list.map(
        (weather) => {
          let date = new Date(Date.parse(weather.dt_txt))
          if(dayArr[date.getDay()][1] == daySelected){
            dataForWeatherRowComponent.push({
              key: '_' + Math.random().toString(36).substr(2, 9),
              temp: Math.floor(weather.main.temp),
              time: date.getHours(),
              tempDescription: weather.weather[0].main
            })
          }
        }
      )
      return dataForWeatherRowComponent
    })
  }
}

export default new Weather()
