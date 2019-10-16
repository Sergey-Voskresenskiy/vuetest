<template>
  <div class="quiz">
    <div class="quiz__photo">
      <img :src="questions[2].image" alt="quiz_img" />
    </div>
    <div class="quiz__content">
      <div class="quiz__top">
        <div class="quiz__title">Шаг {{stepCounter}}</div>
        <div class="quiz__question-counter">{{stepCounter}} / {{step.length}}</div>
      </div>

      <div class="quiz__bottom">
        <div class="quiz__question">{{ questions[2].question }}</div>
        <input type="text" class="quiz__input" :placeholder="questions[2].placeholder" />
        <div class="quiz__text">{{ questions[2].text }}</div>
        <div class="quiz__buttons">
          <button @click="counterUp()">{{ questions[2].buttons[0] }}</button>
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
