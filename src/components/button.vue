<template>
  <a href="#" @click="change()" class="btn">
    <div class="btn__line btn__line-top"></div>
    <div class="btn__line btn__line-right"></div>
    <div class="btn__line btn__line-bottom"></div>
    <div class="btn__line btn__line-left"></div>
    {{ name }}
  </a>
</template>

<script>
export default {
  name: 'btn',
  props: {
    name: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    change: function() {
      this.$emit('btn-change')
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn
  position relative
  display inline-block
  text-transform uppercase
  text-decoration none
  font-size 24px
  color cadetblue
  font-weight bold
  letter-spacing 4px
  padding 15px 30px
  overflow hidden
  transition all .5s linear
  &:hover
    transition-delay .4s
    color #fff
    background cadetblue
    box-shadow 0 0 20px cadetblue, 0 0 40px cadetblue, 0 0 80px cadetblue
    .btn__line-top
      left 100%
      transition 1s
      transition-delay .15s
    .btn__line-bottom
      right  100%
      transition 1s
      transition-delay .15s
    .btn__line-left
      bottom  100%
      transition 1s
      transition-delay 0s
    .btn__line-right
      top  100%
      transition 1s
      transition-delay 0s
  &__line
    position absolute
    display block
    &-top
      top 0
      left -100%
      width 100%
      height 2px
      background linear-gradient(90deg, transparent, cadetblue)
    &-bottom
      bottom 0
      right -100%
      width 100%
      height 2px
      background linear-gradient(270deg, transparent, cadetblue)
    &-left
      left 0
      bottom -100%
      width 2px
      height 100%
      background linear-gradient(0deg, transparent, cadetblue)
    &-right
      right 0
      top -100%
      width 2px
      height 100%
      background linear-gradient(180deg, transparent, cadetblue)
</style>
