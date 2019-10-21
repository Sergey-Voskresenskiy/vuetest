import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepConter: 1,
    stepQuantity: 3,
    quizContent: [
      {
        image: ''
      }
    ]
  },
  actions: {},
  mutations: {}
})
