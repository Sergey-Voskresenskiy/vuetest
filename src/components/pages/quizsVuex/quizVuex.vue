<template>
  <div class="quizVuex">
    <div class="quizVuex__photo">
      <img :src="quiz.image" alt="quizVuex_img" />
    </div>
    <div class="quizVuex__content">
      <div class="quizVuex__top">
        <div class="quizVuex__title">Шаг {{ stepConter }}</div>
        <div class="quizVuex__question-counter">
          <div class="step">{{ stepConter }}</div>/
          <div class="quality">{{ stepQuantity }}</div>
        </div>
      </div>
      <div class="quizVuex__bottom">
        <div class="quizVuex__question">{{quiz.question}}</div>
        <div class="quizVuex__text">{{quiz.text}}</div>
        <div class="quizVuex__buttons">
          <button v-for="(btn, index) in quiz.buttons" :key="index">{{btn}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'quizVuex',
  props: ['quiz'],
  computed: {
    ...mapGetters({
      stepConter: 'getStepConter',
      stepQuantity: 'getStepQuantity'
    })
  }
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
