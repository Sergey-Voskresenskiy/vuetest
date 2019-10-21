<template>
  <div class="quiz">
    <div class="quiz__photo">
      <img :src="questions[0].image" alt="quiz_img" />
    </div>
    <div class="quiz__content">
      <div class="quiz__top">
        <div class="quiz__title">Шаг {{stepCounter}}</div>
        <div class="quiz__question-counter">{{stepCounter}} / {{step.length}}</div>
      </div>

      <div class="quiz__bottom">
        <div class="quiz__question">{{ questions[0].question }}</div>
        <div class="quiz__text">{{ questions[0].text }}</div>
        <div class="quiz__buttons">
          <button @click="counterUp()">{{ questions[0].buttons[0] }}</button>
          <button @click="counterUp()">{{ questions[0].buttons[1] }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'stepCounter', 'step', 'questions'],
  methods: {
    counterUp() {
      this.$emit('btn-counter-up')
    }
  }
}
</script>

<style lang="stylus">
  .quiz
    margin 60px auto 0
    max-width 920px
    width 100%
    position relative
    display flex
    justify-content center
    align-items stretch
    overflow hidden
    border-radius 6px
    border 1px solid rgba(#5f9ea0, .05)
    border-bottom none
    box-shadow 0 10px 10px rgba(#5f9ea0, .25)
    &__top
      display flex
      justify-content space-between
      align-items center
      width 100%
      margin 0 0 40px
      &-thanks
        margin 0
    &__bottom
      display flex
      flex-direction column
      height 100%
    &__photo
      overflow hidden
      min-height 350px
      max-height 350px
      width 40%
      img
        object-position 35% 50%
    &__content
      margin auto 0
      padding 0 20px
      height 100%
      width 60%
      flex-shrink 0
      display flex
      justify-content flex-start
      align-items baseline
      flex-direction column
      &-thanks
        align-items center
    &__title
      font-size 22px
      font-weight 700
    &__thanks
      font-size 22px
      width 100%
      font-weight 700
      text-align center
    &__text
      font-size 12px
      line-height 1.65
      margin-bottom 40px
    &__question
      font-size 16px
      font-weight 400
      margin-bottom 40px
    &__input
      padding 10px 0
      text-indent 15px
      margin-bottom 5px
      border none
      background rgba(#5f9ea0,.25)
      &::placeholder
        color rgba(#2c3e50, .5)
        font-style italic
    &__buttons
      &-thanks
        margin-top 20px
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
</style>
