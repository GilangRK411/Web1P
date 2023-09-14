<template>
  <div class="logincontainer" id="login">
    <div class="containerbox1"></div>
    <span class="login">LOG-IN</span>

    <!-- Login Form -->
    <form class="myform" @submit.prevent="upload">
      <div class="emailbox">
        <label for="email" class="email">Email:</label>
        <input type="email" placeholder="Enter your email" id="email" class="email" v-model="test.email" required>
      </div>
      <div class="passwordbox">
        <label for="password" class="password">Password:</label>
        <input type="password" placeholder="Enter your password" id="username" class="password" v-model="test.password" required>
      </div>
      <div class="submitbox1">
        <button type="submit" class="submitboxlogin">LOGIN</button>
     </div>
    </form>
    <!-- Login Form -->
    
    <span class="sentence1">Discovering Life's Perspectives with InSight</span>
    <span class="text1">Dont have an account yet? Please Sign - Up <router-link to="/register">Here</router-link></span>
    <div class="picture1"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

  Vue.use(axios);
  export default {
    name: 'login',
    data() {
      return {
        result: {},
        test: {
          email: '',
          password: ''
        }
      }
    },
    created() {

    },
    mounted() {
      console.log("mounted() called..........");
    },
    methods: {
      upload() {
        if (this.test.email !== '') {
          axios.post("http://localhost:3000/test/login/#", this.test)
            .then(({ data }) => {
              console.log(data.status);
              try {
                if (data.status === true) {
                  alert("Login Success");
                  setTimeout(() => {
                    window.open('http://localhost:3000/home', '_blank');
                  }, 1000);
                } else {
                  alert("Incorrect email or password.")
                }
              } catch (error) {
                alert('Error, please try again.');
              }
            });
        } else {
          alert('Please enter an email');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.logincontainer {
  left: 0px;
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
.login {
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
  top: 492px;
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
  top: 574px;
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
  top: 654px;
  right: 220px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 16px;
  opacity: 1;
  text-align: center;
}
</style>