import { createStore } from 'vuex'

export default createStore({
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
