import { createStore } from 'vuex'


export default createStore({
  state: {
    isLoading: false,
    success: false,
    error: '',
    errors: {},
  },
  getters: {
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
    },
    SET_ERRORS(state, errors) {
      state.errors = errors;
    },

  },
  actions: {
    validateForm({ commit }, formData) {
      let errors = {};
      if (!formData.name) {
        errors.name = "Name is required";
      }
      if (!formData.number) {
        errors.number = "Phone number is required";
      } else if (!/^[+-]?\d+$/.test(formData.number)) {
        errors.number = "Phone number can only contain numbers, + and -";
      }
      if (!formData.email) {
        errors.email = "Email is required";
      }
      if (!formData.comment) {
        errors.comment = "Comment is required";
      }
      commit('SET_ERRORS', errors);
    }
},
  modules: {
  }
})
