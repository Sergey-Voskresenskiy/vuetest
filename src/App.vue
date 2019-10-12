<template>
  <div id="app">
    <div class="container">
      <div class="info">
        <div class="weather">
          <div class="weather__location">
            <h4>
              {{city}} | {{country}} |
              <small>{{weatherDescription}}</small>
            </h4>
          </div>
          <div class="weather__temp">
            <img :src="weatherIco" />
            <div>
              <h3>{{temp}}</h3>
            </div>
          </div>
          <p>Давление : {{pressure}}</p>
          <p>Влажность : {{humidity}}</p>
          <p>Ветер : {{wind}}</p>
        </div>
        <div class="date">
          <h3>{{ fullTime }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      title: "test",
      fullTime: "",
      city: "",
      country: "",
      temp: "",
      pressure: "",
      humidity: "",
      weatherIco: "",
      wind: "",
      weatherDescription: ""
    };
  },
  created() {
    const date = new Date();
    this.fullTime = `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`;

    // const w = fetch("http://wttr.in/?format=j1", { mode: "no-cors" })
    //   .then(r => r.json())
    //   .then(data => console.log(data));

    const apiKey = "c09050b015aa45f0f162c94a16623214";
    const w = fetch(
      //`http://api.openweathermap.org/data/2.5/weather?id=706483&APPID=${apiKey}&units=metric&lang=ru`
      `http://api.openweathermap.org/data/2.5/forecast?id=706483&APPID=${apiKey}&units=metric&lang=ru`
    )
      .then(r => r.json())
      // .then(data => console.log(data));
      .then(data => {
        this.city = `${data.city.name}`;
        this.country = `${data.city.country}`;
        this.temp = `${data.list[0].main.temp} °`;
        this.pressure = `${data.list[0].main.pressure} hpa`;
        this.humidity = `${data.list[0].main.humidity} %`;
        this.wind = `${data.list[0].wind.speed} m/h`;
        this.weatherDescription = `${data.list[0].weather[0].description}`;
        this.weatherIco = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      });
  }
};
</script>
<style lang="stylus">
@import '../src/assets/styl/default.styl';

.info
  margin-top 60px
  display flex
  justify-content space-evenly
  align-items center
.weather
  &__location
    display flex
    flex-direction column
    align-items center
    margin-bottom 10px
  &__temp
    background rgba(cadetblue,.25)
    display flex
    justify-content space-between
    align-items center
    margin-bottom 30px
    img
      background rgba(cadetblue,.5)
      width 50px
      height 50px
</style>
