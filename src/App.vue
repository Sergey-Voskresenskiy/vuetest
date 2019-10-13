<template>
  <div id="app">
    <div class="container">
      <div class="info">
        <Weather />
        <Date />
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Weather from './components/weather'
import Date from './components/date'

export default {
  name: 'app',
  data: () => {
    return {
      title: 'test'
    }
  },
  components: {
    Weather,
    Date
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
