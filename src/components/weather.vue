<template>
  <div class="weather">
    <div class="weather__location">
      <h4>{{country}} | {{city}}</h4>
      <small>{{weatherDescription}}</small>
    </div>
    <div class="weather__temp">
      <img :src="weatherIco" />
      <div>
        <h3>{{temp}}</h3>
      </div>
    </div>
    <div class="weather__desc">
      <div class="weather__desc__item">
        <p>Давление</p>
        <b>{{pressure}}</b>
      </div>
      <div class="weather__desc__item">
        <p>Влажность</p>
        <b>{{humidity}}</b>
      </div>
      <div class="weather__desc__item">
        <p>Ветер</p>
        <b>{{wind}}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data() {
    return {
      city: '',
      country: '',
      temp: '',
      pressure: '',
      humidity: '',
      weatherIco: '',
      wind: '',
      weatherDescription: ''
    }
  },
  methods: {
    getWeather() {
      // TODO: .env
      const API_KEY = 'c09050b015aa45f0f162c94a16623214'
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=706483&APPID=${API_KEY}&units=metric&lang=ru`
      )
        .then(r => r.json())
        // .then(data => console.log(data));
        .then(data => {
          this.city = `${data.name}`
          this.country = `${data.sys.country}`
          this.temp = `${data.main.temp} °`
          this.pressure = `${data.main.pressure} hpa`
          this.humidity = `${data.main.humidity} %`
          this.wind = `${data.wind.speed} m/h`
          this.weatherDescription = `${data.weather[0].description}`
          this.weatherIco = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
    }
  },
  mounted() {
    this.getWeather()
  }
}
</script>

<style lang="stylus" scoped>
.weather
  &__location
    display flex
    align-items baseline
    justify-content space-between
    margin-bottom 10px
  &__temp
    background rgba(cadetblue,.25)
    display flex
    justify-content space-between
    align-items center
    margin-bottom 15px
    img
      background rgba(cadetblue,.5)
      width 50px
      height 50px
  &__desc
    &__item
      display flex
      justify-content space-between
      align-items center
      color cadetblue
      font-size 12px
</style>
