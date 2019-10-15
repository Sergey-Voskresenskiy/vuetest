<template>
  <div class="input">
    <div class="div">
      <input type="text" placeholder="v-model" @input="updateValue" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    updateValue(value) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
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
