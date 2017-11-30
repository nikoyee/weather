/**
 * Personal Note:
 *
 * This felt sooooo right. My code smelled bad when i had so much logic inside my App.js about manipulating the
 * json data for the application. I created this class to give me the interface i needed to easily use the json data.
 */
import WeatherAPI from '../WeatherAPI'
class Weather {
  /**
   *  day is a string that represents an element in days array
   */
  getDayWeather = (day) => {
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let dataForWeatherRowComponent = []
    return WeatherAPI.getStoredWeatherData()
    .then(data => {
      JSON.parse(data).list.map(
        (weather) => {
          let date = new Date(Date.parse(weather.dt_txt))
          if(days[date.getDay()] == day){
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
    .catch(error => {
      alert(error)
    })
  }

  refreshData = () => {
    WeatherAPI.getWeatherData()
  }
}

export default new Weather()
