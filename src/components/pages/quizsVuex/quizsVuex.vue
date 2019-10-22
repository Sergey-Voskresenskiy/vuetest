<template>
  <div style="margin-bottom: 60px;">
    <h5>quizs_Vuex</h5>
    <!-- // -->
    <transition name="fade" mode="out-in">
      <quizVuex :quiz="quizContent[0]" v-if="stepConter == 1" />
      <quizVuex :quiz="quizContent[1]" v-else-if="stepConter ==2" />
      <quizVuex :quiz="quizContent[2]" v-else />
    </transition>
  </div>
</template>

<script>
import quizVuex from './quizVuex'
import quizJSON from './../../../quiz.json'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'quizsVuex',
  components: {
    quizVuex
  },
  computed: {
    ...mapGetters({
      quizContent: 'getQuizs',
      stepConter: 'getStepConter',
      stepQuantity: 'getStepQuantity'
    })
  },
  created() {
    // this.$store.dispatch('loadQuizs', quizJSON)
    this.loadQuizs(quizJSON)
  },
  methods: {
    ...mapActions(['loadQuizs'])
  }

  // computed: {
  //   quizContent() {
  //     return this.$store.getters.getQuizs
  //   },
  //   stepConter() {
  //     return this.$store.getters.getStepConter
  //   },
  //   stepQuantity() {
  //     return this.$store.getters.getStepQuantity
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.quizVuex
  margin 60px auto 0
  max-width 920px
  display flex
  border-radius 6px
  align-items stretch
  border 1px solid rgba(#5f9ea0, .05)
  border-bottom none
  box-shadow 0 10px 10px rgba(#5f9ea0, .25)
  overflow hidden
  &__photo
    width 40%
    flex-shrink 0
    min-height 500px
    overflow hidden
  &__content
    width 100%
    display flex
    flex-direction column
    justify-content space-around
  &__top
      display flex
      justify-content space-between
      align-items flex-start
      width 100%
    &__bottom
      display flex
      flex-direction column
      align-items center
      justify-content space-around
      height 100%
    &__photo
      overflow hidden
      max-height 350px
      width 40%
      border-radius 6px
      img
        object-position 35% 50%
    &__title
      padding-top 10px
      padding-left 10px
      font-size 22px
      font-weight 700
    &__question-counter
      color #c3c3c3
      display flex
      padding-top 10px
      padding-right 10px
    &__text
      font-size 12px
      line-height 1.65
    &__question
      font-size 16px
      font-weight 400
    &__buttons
      button
        padding 10px 15px
        cursor pointer
        border none
        font-size 16px
        font-weight 700
        background #5f9ea0
        border 1px solid #5f9ea0
        color #fff
        transition all .5s ease
        &:hover
          background #fff
          color #2c3e50
        &:first-child
          margin-right 15px

.step
  font-weight 700
  padding-right 5px
.quality
  padding-left 5px

</style>
