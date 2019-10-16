<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="container">
      <hr />
      <div class="block">
        <Weather />
        <Date />
      </div>
      <hr />
      <div class="block">
        <Input v-model="title" :title="title" />
        <Button name="change title" @btn-change="chengeTitle" />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from '../../components/weather'
import Date from '../../components/date'
import Button from '../../components/button'
import Input from '../../components/input'
export default {
  data() {
    return {
      title: 'Main'
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

<style lang="stylus" scoped>

</style>
