<template>
  <div class="regisontainer" id="regis">
    <div class="containerbox1"></div>
    <span class="regis">SIGN-IN</span>

    <!-- Login Form -->
    <form class="myform" @submit.prevent="saveData">
      <div class="emailbox">
        <label for="email" class="email">E-mail</label>
        <input type="email" placeholder="Enter your email" class="email" v-model="test.email" required>
      </div>
      <div class="usernamebox">
        <label for="username" class="username">Username:</label>
        <input type="text" placeholder="Enter your username" class="username" v-model="test.username" required>
      </div>
      <div class="passwordbox">
        <label for="password" class="password">Password:</label>
        <input type="password" placeholder="Enter your password" class="password" v-model="test.password" required>
      </div>
      <div class="submitbox1">
        <button type="submit" class="submitboxlogin">SIGN-IN</button>
      </div>
    </form>
    <!-- Login Form -->

    <span class="sentence1">Discovering Life's Perspectives with InSight</span>
    <span class="text1">Already Have an Account? Please Log - In <router-link to="/login">here</router-link></span>
    <div class="picture1"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'register',
  data() {
    return {
      test: {
        id: '',
        email: '',
        username: '',
        password: ''
      },
      isLoading: false
    };
  },
  methods: {
    saveData() {
      this.isLoading = true;

      axios
        .post('http://localhost:3000/test/create', this.test)
        .then(() => {
          setTimeout(() => {
            alert('Registration Completed.');
            this.$router.push('/login');
            this.isLoading = false;
          }, 2000);
        })
        .catch(error => {
          console.error(error);
          alert('Registration Failed.');
          this.isLoading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .logincontainer {
    left: 0px;
    background-color: rgba(246, 241, 241, 1);
  }
  .containerbox1 {
    width: 1920px;
    height: 1000px;
    background: rgba(58,58,58,1);
    opacity: 1;
    overflow: hidden;
    position: absolute;
    right: 950px;
    z-index: -1;
    border-right: 5px solid black;
  
  }
  .regis {
    width: 400px;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 238px;
    right: 250px;
    font-family: Montserrat;
    font-weight: Thin Italic;
    font-size: 96px;
    opacity: 1;
    text-align: left;
  }
  input::placeholder {
    color: rgb(0, 0, 0);
  }
  .passwordbox {
    width: 138px;
    position: absolute;
    top: 596px;
    right: 620px;
  }
  .password {
    position: absolute;
    font-family: Montserrat;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    text-align: left;
    padding: 10px;
    border: none;
    outline: none;
  }
  .usernamebox {
    width: 138px;
    position: absolute;
    top: 496px;
    right: 620px;
    
  }
  .username {
    position: absolute;
    font-family: Montserrat;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    text-align: left;
    border: none;
    padding: 10px;
    outline: none;
  }

  .emailbox {
    width: 138px;
    position: absolute;
    top: 396px;
    right: 620px;
  }
  .email {
    position: absolute;
    font-family: Montserrat;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    text-align: left;
    border: none;
    padding: 10px;
    outline: none;
  }
  .picture1 {
    width: 981px;
    height: 907px;
    background: url("C:/Coding/tekweb/final-project/src/assets/insight.png");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    position: absolute;
    top: 0px;
    right: 950px;
    overflow: hidden;
    border: none;
    z-index: -1;
  }
  .sentence1 {
    width: 570px;
    color: rgba(0,0,0,1);
    position: absolute;
    top: 556px;
    right: 950px;
    font-family: Libre Caslon Text;
    font-size: 28px;
    opacity: 1;
    text-align: center;
  }
  .submitbox1 {
    width: 540px;
    height: 41px;
    background: rgba(64,68,237,1);
    padding: 10px 239px;
    margin: 10px;
    opacity: 1;
    position: absolute;
    top: 674px;
    right: 200px;
    overflow: hidden;
    display: inline-block;
    transition: transform 0.3s ease;
  }
  .submitbox1:hover {
  transform: scale(1.1);
}
  .submitboxlogin {
    width: 100%;
    color: rgba(255,255,255,1);
    position: absolute;
    font-family: Montserrat;
    font-weight: Regular;
    font-size: 20px;
    opacity: 1;
    right: 00px;
    text-align: center;
    background-color: rgba(64,68,237,1);
    border: none;
    cursor: pointer;
    display: inline-block;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  .submitboxlogin:hover {
  background-color: rgba(64,68,237,1);
  color: white;
}
  .text1 {
    width: 514px;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 754px;
    right: 220px;
    font-family: Montserrat;
    font-weight: Regular;
    font-size: 16px;
    opacity: 1;
    text-align: center;
  }
  </style>