<template>
  <div class="quiz">
    <div class="quiz__photo">
      <img :src="thanks.image" alt="quiz_img" />
    </div>
    <div class="quiz__content quiz__content-thanks">
      <div class="quiz__top quiz__top-thanks">
        <div class="quiz__thanks">{{thanks.text}}</div>
      </div>

      <div class="quiz__bottom">
        <div class="quiz__buttons quiz__buttons-thanks">
          <button @click="counterUp()">{{thanks.btn }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['thanks'],
  methods: {
    counterUp() {
      this.$emit('btn-counter-up')
    }
  }
}
</script>
