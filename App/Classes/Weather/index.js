class Weather {
  constructor(){
    this.data = require('../../Assets/weather.json')
    this.weatherList = this.data.list
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
    let dataForWeatherRowComponent = []
    this.weatherList.map(
      (weather) => {
        let numberForDayArr = new Date(weather.dt_txt).getDay()
        let day = this.dayArr[numberForDayArr][1]
        if(day == dayPicked){
          dataForWeatherRowComponent.push({
            key: weather.dt_txt,
            temp: Math.floor(weather.temp),
            time: new Date(weather.dt_txt).getHours(),
            tempDescription: weather.weather[0].main
          })
        }
      }
    )
    return dataForWeatherRowComponent
  }
}

export default new Weather()
