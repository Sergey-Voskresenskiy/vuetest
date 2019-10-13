<template>
  <div id="app">
    <div class="container">
      <div class="info">
        <Weather />
        <div class="date">
          <h3>{{ fullTime }}</h3>
          <h4>{{ title }}</h4>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Weather from './components/weather'
export default {
  name: 'app',
  data: () => {
    return {
      title: 'test'
    }
  },
  components: {
    Weather
  },
  created() {
    const date = new Date()
    this.fullTime = `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`

    // const w = fetch("http://wttr.in/?format=j1", { mode: "no-cors" })
    //   .then(r => r.json())
    //   .then(data => console.log(data));
  }
}
</script>
<style lang="stylus">
@import '../src/assets/styl/default.styl';

.info
  margin-top 60px
  display flex
  justify-content space-evenly
  align-items center
  flex-wrap wrap

</style>
