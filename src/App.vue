<template>
  <div id="app">
    <div class="container">
      <div class="info">
        <Weather />
        <Date />
      </div>
      <hr />

      <div class="input">
        <input type="text" v-model.trim="input" placeholder="v-model" />
        <p>{{ input }}</p>
      </div>
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
      title: 'test',
      input: ''
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

.input
  display flex
  justify-content center
  align-items center
  flex-direction column
  input
    background rgba(cadetblue,.25)
    color #2c3e50
    height 40px
    border none
    text-indent 20px
    font-weight 700
    margin-bottom 10px
    &::placeholder
      color rgba(cadetblue,.5)
      font-style italic

</style>
