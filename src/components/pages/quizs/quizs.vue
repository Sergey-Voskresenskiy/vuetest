<template>
  <div style="margin-bottom: 60px;">
    <h5>{{title}}</h5>
    <QuizOne
      :step="step"
      :stepCounter="stepCounter"
      :questions="questions"
      v-if="stepCounter == 1"
      @btn-counter-up="stepCounterUp"
    />
    <QuizTwo
      :step="step"
      :stepCounter="stepCounter"
      :questions="questions"
      v-else-if="stepCounter == 2"
      @btn-counter-up="stepCounterUp"
    />
    <QuizThree
      :step="step"
      :stepCounter="stepCounter"
      :questions="questions"
      v-else-if="stepCounter == 3"
      @btn-counter-up="stepCounterUp"
    />
    <QuizFour v-else-if="stepCounter == 4" :thanks="thanks" @btn-counter-up="stepCounterUp" />
  </div>
</template>

<script>
import QuizOne from './quiz1'
import QuizTwo from './quiz2'
import QuizThree from './quiz3'
import QuizFour from './quiz4'
export default {
  name: 'quiz',
  data: () => {
    return {
      title: 'совсем чуть чуть вопросов!',
      stepCounter: 1,
      step: [1, 2, 3],
      thanks: {
        image:
          'https://www.centr-crm.ru/wp-content/uploads/images/stories/na-kazhdyi-den/blagodarnost.jpg',
        text: 'Cпасибо за потраченное время',
        btn: 'С начала'
      },
      questions: [
        {
          image:
            'https://www.kramola.info/sites/default/files/styles/page-main/public/images/vesti/original_0.jpeg?itok=XpAbkDYC',
          question: 'Правда или ложь?',
          text:
            '20 июля 1969 года, в 20:17:39 UTC командир экипажа Нил Армстронг и пилот Базз Олдрин посадили лунный модуль корабля в юго-западном районе Моря Спокойствия. Они оставались на поверхности Луны в течение 21 часа 36 минут и 21 секунды',
          buttons: ['Правда', 'Ложь']
        },
        {
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgkDn5-g-S-zO3vt4QDV84u00HEDtnDBVbS_cDm_uXAchkZjbMqg&s',
          question:
            'Бывает ли, что Вы говорите о вещах, в которых совсем не разбираетесь?',
          text: 'Ну шас то врать не обязательно',
          buttons: ['Бывает', 'Нет']
        },
        {
          image:
            'http://balashiha.ru/imageproc/ea1a823a-0a20-406a-a81f-492b6195219a_540x350',
          question: 'Укажите свой Email и мы вышлем вам результаты',
          text: 'Плез, ну очень нужно ваше мыло',
          placeholder: 'Email',
          buttons: ['Отправить']
        }
      ]
    }
  },
  components: { QuizOne, QuizTwo, QuizThree, QuizFour },
  methods: {
    stepCounterUp() {
      if (this.stepCounter > 3) {
        this.stepCounter++
      } else {
        this.stepCounter == 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
