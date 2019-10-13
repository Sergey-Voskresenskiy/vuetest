<template>
  <div class="date">
    <h3 @click="updateDate" class="fullTime">{{ getFullTime }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Date',
  data: () => {
    return {
      time: `${new Date().toLocaleTimeString()}`,
      date: `${new Date().toLocaleDateString()}`
    }
  },
  computed: {
    getFullTime: {
      get: function() {
        return `${this.time} - ${this.date}`
      },
      set: function() {
        this.time = `${new Date().toLocaleTimeString()}`
        this.date = `${new Date().toLocaleDateString()}`
      }
    }
  },
  methods: {
    updateDate(e) {
      this.getFullTime = `${this.time} - ${this.date}`
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
