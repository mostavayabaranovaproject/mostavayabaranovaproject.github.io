<template>
   <div>
    <button class="fixed-bottom-right" @click="showForm = true" :disabled="isLoading" v-if="!success">СВЯЗАТЬСЯ</button>
    <div class="dialog">
      <div v-if="showForm" class="form-popup col col-10 col-md-6">
        <div class="form-dialog" id="forma">
          <form @submit.prevent="submitForm">
            <div class="form-group">

              <input type="text" v-model="name" name="name" class="form-control" id="InputName" placeholder="Ваше имя"
                required>

            </div>
            <div class="form-group">

              <input type="tel" v-model="number" name="phone" class="form-control" id="InputPhone" placeholder="Телефон"
                required>

            </div>
            <div class="form-group">

              <input type="email" v-model="email" name="email" class="form-control" id="InputEmail" placeholder="E-mail"
                required>

            </div>
            <div class="form-group">

              <textarea v-model="comment" name="msg" class="form-control" id="Textarea" rows="3"
                placeholder="Ваш комментарий"></textarea>

            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="Check" required>
              <label class="form-check-label" for="Check">
                <a>Согласен с политикой обработки персональных данных</a></label>
            </div>
            <button type="submit" class="form-btn btn-primary" :disabled="isLoading">
              <span v-if="isLoading">Зарузка...</span>
              <span v-else>Отправить</span>
            </button>
          </form>
          <div class="messageD">
            {{ message }}
         </div>
        </div>
      </div>
    </div>
  </div>  
</template>
  
 <script>
export default {
  data() {
    return {
      showForm: false,
      isLoading: false,
      success: false,
      error: null,
    }
  },
  methods: {
    async submitForm() {
        try {
            this.isLoading = true;
            let formData = {
                name: this.name,
                number: this.number,
                email: this.email,
                comment: this.comment
            }
            let response = await fetch('https://formcarry.com/s/CZhNxnrEQ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                this.success = true;
                this.isLoading = false;
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (err) {
            this.error = 'Failed to submit form. Please try again.';
            this.isLoading = false;
        }
    },
},

}
</script>



<style>

.error-message {
  color: red;
}

.success-message {
  color: green;
}
.fixed-bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.form-popup {
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #040613;
  padding: 20px;
}
</style>
