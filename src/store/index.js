import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepConter: 1,
    stepQuantity: 3,
    quizContent: []
  },
  actions: {
    loadQuizs(context, payload) {
      context.commit('loadQuizs', payload)
    }
  },
  mutations: {
    loadQuizs(state, payload) {
      state.quizContent = payload
    }
  },
  getters: {
    getQuizs: state => state.quizContent,
    getStepConter: state => state.stepConter,
    getStepQuantity: state => state.stepQuantity
  }
})
