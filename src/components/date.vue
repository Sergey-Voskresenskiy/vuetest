<template>
  <div class="date">
    <h3 @click="updateDate" class="fullTime">{{ fullTime }}</h3>
    <h4>{{ title }}</h4>
  </div>
</template>

<script>
const date = new Date() //! ну это пиздец коненчо, но в computed я занести это не смог
export default {
  name: 'Date',
  data: () => {
    return {
      title: 'test',
      fullTime: `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`
    }
  },
  methods: {
    updateDate(e) {
      const date = new Date()
      this.fullTime = `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`
    }
  }
}
</script>

<style lang="stylus">
  .fullTime
    cursor pointer
    transition color .5s ease
    &:hover
      color cadetblue
</style>
