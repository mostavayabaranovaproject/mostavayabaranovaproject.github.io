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
import { mapState } from 'vuex'
 export default {
   computed: {
   ...mapState({
     isLoading: state => state.isLoading,
     success: state => state.success,
     error: state => state.error
   }),
 },
   data() {
     return {
       showForm: false,
       message:'',
       name: '',
       number: '',
       email: '',
       comment: ''
     }
   },
 methods: {
   async submitForm() {
     this.$store.commit('setLoading', true);
     try {
       const response = await fetch('https://formcarry.com/s/CZhNxnrEQ', {
         method: 'POST',
         headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
         body: JSON.stringify({
           name: this.name,
           number: this.number,
           email: this.email,
           comment: this.comment
         })
       });
       if (response.ok) {
         this.$store.commit('setSuccess', true);
         this.message="Форма отправлена!";
         this.name='';
         this.number='';
         this.email='';
         this.comment='';
         localStorage.removeItem(this.newName);
         localStorage.removeItem(this.newNumber);
         localStorage.removeItem(this.newEmail);
         localStorage.removeItem(this.newComment);
       } else {
         throw new Error('Failed to submit form. Please try again.');
       }
     } catch (error) {
       this.message="Повторите попытку"
     } finally {
       this.$store.commit('setLoading', false);
     }
   },
   hideForm() {
       this.showForm = false;
       history.pushState(true, null, "#");
     },
     sForm() {
       this.showForm = true;
     }
 },
 mounted() {
  window.addEventListener("popstate", () => {
    this.hideForm();
  });
  if (location.hash === "#contactus") {
    this.sForm();
  }
  
    document.addEventListener('DOMContentLoaded', function () {
      let c = document.getElementById("btn");
  c.addEventListener("click", () => {
    history.pushState(true, null, "#contactus");
  
  });
  if (location.hash === "#contactus") {
    this.sForm();
  }
  
    });
    
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.number) {
      this.number = localStorage.number;
    }
    if (localStorage.comment) {
      this.comment = localStorage.comment;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    email(newEmail) {
      localStorage.email= newEmail;
    },
    number(newNumber) {
      localStorage.number = newNumber;
    },
    comment(newComment) {
      localStorage.comment = newComment;
    }
  }
}
</script>
 




<style>
.error-message {
  font-size: 20px;
  color: rgb(148, 29, 29);
}

.success-message {
  font-size: 20px;
  color: rgb(36, 105, 36);
}

.messageD {
  color: #F14D34;
  padding-top: 15px;
  text-align: center;
}

.fixed-bottom-right {
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 120px;
  height: 60px;
  border-radius: 25px;
  font-size: 15px;
  
}

.form-control {
  color: white;
  font-size: 14px;
  width: 100%;
  min-width: 150px;
  height: 68px;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: none;
  margin-bottom: 8px;
  transition: 0.4s;
  height: 55px;
}

.form-dialog {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
}

/*.dialog {
  position: fixed;
  z-index: 20000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(58, 89, 136, 0.596);
  display: flex;
}*/
@media (min-width:768px) {
  .fixed-bottom-right {
    bottom: 20px;
  }
}

.form-popup {
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #040613;
  padding: 20px;
  border: 2px solid;
  padding: 1vw;
  border-radius: 25px;
  padding-bottom: 20px;
}
</style>
