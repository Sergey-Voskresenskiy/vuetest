<template>
  <div id="app">
    <div class="container">
      <div class="info">
        <Weather />
        <Date />
      </div>
      <hr />

      <div class="input">
        <div class="div">
          <input type="text" v-model.trim="input" placeholder="v-model" />
          <p>{{ input }}</p>
        </div>
        <Button name="button" />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from './components/weather'
import Date from './components/date'
import Button from './components/button'

export default {
  name: 'app',
  data: () => {
    return {
      input: ''
    }
  },
  components: {
    Weather,
    Date,
    Button
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
  justify-content space-evenly
  align-items baseline
  flex-wrap wrap
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
