<template>
  <div>
    <button class="fixed-bottom-right" @click="showForm = true" :disabled="isLoading" v-if="!success">Show Form</button>
    <div v-if="showForm" class="form-popup">
      <div class="form" id="forma">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <input type="text" v-model="name" name="name" class="form-control" id="InputName" placeholder="Ваше имя" required>
          </div>
          <div class="form-group">
            <input type="tel" v-model="number" name="phone" class="form-control" id="InputPhone" placeholder="Телефон" required>
          </div>
          <div class="form-group">
            <input type="email" v-model="email" name="email" class="form-control" id="InputEmail" placeholder="E-mail" required>
          </div>
          <div class="form-group">
            <textarea v-model="comment" name="msg" class="form-control" id="Textarea" rows="3" placeholder="Ваш комментарий"></textarea>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="Check" required>
            <label class="form-check-label" for="Check">
              <a>Согласен с политикой обработки персональных данных. </a></label>
          </div>
          <button type="submit" class="form-btn btn-primary" :disabled="isLoading">
            <span v-if="isLoading">Submitting...</span>
            <span v-else>Submit</span>
          </button>
        </form>
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        <div v-if="success" class="success-message">
          Form submitted successfully!
        </div>
      </div>
    </div>
  </div>  
</template>
  
  <script>
export default{
    name: 'ContactUS',
};
  </script>
  <style>
  #test{
    height: 100px;
    width: 200px;
    margin-top: 100px;
  }
</style>
