import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    success: false,
    error: ''
  },
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading
    },
    setSuccess(state, success) {
      state.success = success
    },
    setError(state, error) {
      state.error = error
    }
  }
})