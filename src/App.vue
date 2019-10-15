<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="container">
      <div class="info">
        <Weather />
        <Date />
      </div>
      <div class="info">
        <Input v-model.trim="title" :title="title" />
        <Button name="change title" @btn-change="chengeTitle" />
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Weather from './components/weather'
import Date from './components/date'
import Button from './components/button'
import Input from './components/input'

export default {
  name: 'app',
  data: () => {
    return {
      title: 'vue test'
    }
  },
  components: {
    Weather,
    Date,
    Button,
    Input
  },
  methods: {
    chengeTitle: function() {
      this.title = 'btn $emit("change")'
    }
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
