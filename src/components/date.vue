<template>
  <div class="date">
    <h3 @click="updateDate" class="fullTime">{{ fullTime }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Date',
  data: () => ({
    time: `${new Date().toLocaleTimeString()}`,
    date: `${new Date().toLocaleDateString()}`
  }),
  computed: {
    fullTime: {
      get() {
        return `${this.time} - ${this.date}`
      },
      set() {
        this.time = `${new Date().toLocaleTimeString()}`
        this.date = `${new Date().toLocaleDateString()}`
      }
    }
  },
  methods: {
    updateDate(e) {
      this.fullTime = `${this.time} - ${this.date}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  .fullTime
    cursor pointer
    transition color .5s ease
    &:hover
      color cadetblue
</style>
