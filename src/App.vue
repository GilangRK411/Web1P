<template>
  <div id="navbar1" class="navbar">
    <div class="navbar1"></div>
    <div class="line"></div>
    <router-link to="/register" class="box1">
      <router-link to="/register" class="register">Sign-Up</router-link>
    </router-link>
    <router-link to="/login" class="box2">
      <router-link to="/login" class="login">Log-in</router-link>
    </router-link>
    <div class="insight"></div>
    <nav>
      <router-link to="/home" class="home">Home</router-link>
      <a to="/aboutus" href="#aboutus" class="aboutus">About Us</a>	
      <a to="/contacts" class="contacts" href="#contact">Contacts</a>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>

@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),   url("C:/Coding/tekweb/final-project/src/font/Montserrat.ttf") format("truetype");
}

* {
  box-sizing: border-box;
}

.navbar {
  background-color: rgba(246, 241, 241, 1);
}
.navbar1 {
  width: 100%;
  height: 100px;
  background: rgba(185,185,185,1);
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  border-bottom: 5px solid black;
}
.box1:hover {
  transform: scale(1.1);
}
.box1 {
  width: 175px;
  height: 52px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 22px;
  left: 1635px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease;
}
.box2:hover {
  transform: scale(1.1);
}
.box2 {
  width: 175px;
  height: 52px;
  background: rgba(255,255,255,1);
  opacity: 1;
  position: absolute;
  top: 22px;
  left: 1385px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 15px 10px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.3s ease;
}
.insight {
  width: 239px;
  height: 130px;
  background: url("C:/Coding/tekweb/final-project/src/assets/insight.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: -12px;
  left: 46px;
  overflow: hidden;
}
.login {
  width: 100%;
  height: 100%;
  color: rgba(0,0,0,1);
  position: relative;
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 28px;
  left: 40px;
  bottom: -5px;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease;
}
.login:hover {
  color: rgb(0, 0, 0); 
}
.register {
  width: 100%;
  height: 100%;
  color: rgba(255,255,255,1);
  position: relative;
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 28px;
  left: 25px;
  bottom: -5px;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease;
}
.register:hover {
  color: rgb(255, 255, 255); 
}
.home {
  width: 98px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 34px;
  left: 373px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 28px;
  opacity: 1;
  text-align: center;
  text-decoration: none;
}
.aboutus {
  width: 153px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 34px;
  left: 559px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 28px;
  opacity: 1;
  text-align: center;
  text-decoration: none;
}
.contacts {
  width: 153px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 34px;
  left: 800px;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 28px;
  opacity: 1;
  text-align: center;
  text-decoration: none;
}
</style>
