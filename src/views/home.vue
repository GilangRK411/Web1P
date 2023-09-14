<template>
  <div class="home" >
    <div class="no1">
      <span class="sentence1">Providing a platform to share personal experiences and stories</span>
      <div class="box1">
        <router-link to="/register" class="get_started">Get Started</router-link>
      </div> 
      <div class="box2">
        <a class="about_us" href="#aboutus">About Us</a>
      </div>
      <h1 class="sentence2"><b>Navigating Life's Labyrinth with Grace, Wisdom, and Intuition, Unveiling New Horizons of Personal Growth</b></h1>
      <div class="picture1"></div>
    </div>
    <div class="no2">
      <span class="sentence3" id="aboutus">Welcome to InSight !</span>
      <span class="text1">
        InSight is born out of we desire to share the wonders and complexities of life through the written word. It is a digital sanctuary where we pour heart and soul, expressing unique perspectives on various topics that captivate we mind and ignite we curiosity.
      </span>
      <span class="text2">
         Through introspection and reflection, I aim to unravel the mysteries of existence, uncover the beauty in the mundane, and celebrate the extraordinary in everyday life. InSight is a canvas where words come alive, offering glimpses into personal growth, dreams, and aspirations. As you delve into the articles, stories, and musings within InSight, we hope is that you find solace, inspiration, and resonance. May you discover new insights, broaden your horizons, and embrace the infinite possibilities that life has to offer. Join me on this captivating journey of self-discovery, as together we navigate the labyrinth of emotions, thoughts, and experiences that shape our lives. Let's cultivate a community of kindred spirits, where authenticity and vulnerability are celebrated, and where each reader finds a sense of belonging.
      </span>
      <div class="iconpack1">
        <div class="iconhover1">
          <div class="icon1"></div>
        </div>
        <div class="iconhover2">
          <div class="icon2"></div>
        </div>
        <div class="iconhover3">
          <div class="icon3"></div>
        </div>
        <div class="iconhover4">
          <div class="icon4"></div>
        </div>
        <div class="iconhover5">
          <div class="icon5"></div>
        </div>
        <div class="iconhover6">
          <div class="icon6"></div>
        </div>
      </div>
    </div>
      <div class="no3">
        <span class="text3">Embark on a journey of self-discovery and growth by capturing your thoughts and reflections on your blog.</span>
        <div class="writebox">
          <router-link to="/register" class="writebox1">Write on InSight</router-link>
        </div>
        <div class="container1">
          <div class="containerbox"></div>
          <span class="containerboxsentence">
            Have a quick question? Fill out this form. If you need to include a picture or file attachment, please use one of the emails listed to the left instead.
          </span>
          <span class="containerboxname">Name:</span>
          <span class="containerboxemail">Email:</span>
          <span class="containerboxcomment">Comments / Feedback:</span>
          <span class="containerboxinformation">Information and Sales:</span>
          <span class="containerboxsupport">Support:</span>
          <span class="containerboxveriv">Vericication of Employment:</span>
          <span class="containerboxfollow">Follow us on:</span>
          <span class="containerboxcontact" id="contact">Contact Us</span>

          <!-- Container suggestion -->
          <form class="myform" @submit.prevent="submitForm">

            <div class="containerwriteboxname">
              <label for="name">Your Name:</label>
            </div>
            <input class="containerwriteboxname" type="text" id="name" name="name" v-model="name" required>

            <div class="containerwriteboxemail">
              <label for="email">Your Email:</label>
            </div>
            <input class="containerwriteboxemail" type="email" id="email" name="email" v-model="email" required>

            <div class="containerwriteboxcomment">
             <label for="comment">Your Comment:</label>
            </div>
            <textarea class="containerwriteboxcomment" id="comment" name="comment" v-model="comment" required></textarea>

            <div class="containerboxsend">
              <button type="submit" class="containerboxsendsubmit">Send Message</button>
            </div>

          </form>
          <!-- Container suggestion -->

          <span class="containerboxemailpartner">
            <a href="mailto:partnermarketing@InSight.com">partnermarketing@InSight.com</a>
          </span>
          <span class="containerboxemailsupport">
            <a href="mailto:support@InSight.com">support@InSight.com</a>
          </span>
          <span class="containerboxemailvoe">
            <a href="mailto:voe_centercall@InSight.com">voe_centercall@InSight.com</a>
          </span>
        </div>
        <div class="iconbox2">
          <a href="https://id.linkedin.com/">
            <div class="linkedin"></div>
          </a>
          <a href="https://twitter.com/">
            <div class="twitter"></div>
          </a>
          <a href="https://www.instagram.com/">
            <div class="instagram"></div>
          </a>
          <a href="https://id-id.facebook.com/">
            <div class="facebook"> </div>
          </a>
        </div>
        <div class="bottomcontainer">
        <span class="bottomcontainer1">Copyright © InSightBlog 2023, All Rights Reserved</span>
        <span class="bottomcontainer2">Privacy Policy</span>
        <span class="bottomcontainer3">Terms of Use</span>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      comment: '',
      isLoading: false
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const formData = {
        name: this.name,
        email: this.email,
        comment: this.comment
      };
      axios.post('http://localhost:3000/submit-form', formData)
        .then(response => {
          console.log('Email sent:', response.data);
          alert('Email sent successfully.');
        })
        .catch(error => {
          console.log('Error:', error);
          alert('Failed to send email. Please try again.');
        })
        .finally(() => {
          this.resetForm();
        });
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.comment = '';
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}
.home{
 left: 0px;
 background-color: rgba(246, 241, 241, 1);
 font-size: 14px;
}
.sentence1 {
  width: 983px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 500px;
  left: 137px;
  font-family: Libre Caslon Text;
  font-weight: Bold;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.box1 {
  width: 295px;
  height: 90px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 652px;
  left: 137px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: inline-block;
  transition: transform 0.3s ease;
}
.box1:hover {
  transform: scale(1.1);
}

.box2 {
  width: 295px;
  height: 90px;
  background: rgba(219,219,219,1);
  opacity: 1;
  position: absolute;
  top: 652px;
  left: 533px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: inline-block;
  transition: transform 0.3s ease;
}
.box2:hover {
  transform: scale(1.1);
}
.get_started {
  width: 100%;
  color: rgba(255,255,255,1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 35px;
  opacity: 1;
  position: relative;
  top: 21px;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease;
}
.get_started:hover {
  color: rgb(255, 255, 255); 
}
.about_us {
  width: 100%;
  color: rgba(0,0,0,1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 35px;
  opacity: 1;
  position:relative;
  top: 21px;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease;
}
.about_us:hover {
  color: rgb(0, 0, 0); 
}
.sentence2 {
  width: 983px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 300px;
  left: 137px;
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 40px;
  opacity: 1;
  text-align: left;
  border-collapse: 10px solid black;
}
.picture1 {
  width: 725px;
  height: 554px;
  background: url("C:/Coding/tekweb/final-project/src/assets/picture1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 220px;
  left: 1120px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}
.sentence3 {
  width: 709px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 1166px;
  left: 615px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 60px;
  opacity: 1;
  text-align: center;
}
.text1 {
  width: 966px;
  color: rgba(0,0,0,1);
  top: 1300px;
  left: 460px;
  font-family: Montserrat;
  font-weight: Light;
  font-size: 23px;
  opacity: 1;
  text-align: center;
  position: absolute;
}
.text2 {
  width: 958px;
  color: rgba(0,0,0,1);
  top: 1600px;
  left: 881px;
  font-family: Montserrat;
  font-weight: Light;
  font-size: 23px;
  opacity: 1;
  text-align: left;
  position: absolute;
}
.iconhover1:hover .icon1 {
  transform: scale(1.1);
}
.icon1 {
  width: 212px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon1.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1600px;
  left: 92px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.iconhover2:hover .icon2 {
  transform: scale(1.1);
}
.icon2 {
  width: 212px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon2.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1800px;
  left: 92px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.iconhover3:hover .icon3 {
  transform: scale(1.1);
}
.icon3 {
  width: 212px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon3.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1600px;
  left: 563px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.iconhover4:hover .icon4 {
  transform: scale(1.1);
}
.icon4 {
  width: 212px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon4.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1600px;
  left: 328px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.iconhover5:hover .icon5 {
  transform: scale(1.1);
}
.icon5 {
  width: 215px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon5.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1800px;
  left: 325px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.iconhover6:hover .icon6 {
  transform: scale(1.1);
}
.icon6 {
  width: 212px;
  height: 160px;
  background: url("C:/Coding/tekweb/final-project/src/assets/icon6.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  top: 1800px;
  left: 563px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease-out;
}
.container1 {
left: 0px;
}
.writebox {
  width: 470px;
  height: 88px;
  background: rgba(0,0,0,1);
  opacity: 1;
  position: absolute;
  top: 2300px;
  left: 725px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  box-shadow: 20px 15px 10px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: inline-block;
  transition: transform 0.3s ease;
}
.writebox:hover {
  transform: scale(1.1);
}
.writebox1 {
  color: rgba(255,255,255,1);
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 35px;
  opacity: 1;
  width: 100%;
  position: relative;
  top: 20px;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease;
}
.writebox1:hover {
  color: rgb(255, 255, 255);
}
.text3 {
  width: 1400px;
  color: rgba(0,0,0,1);
  position: absolute;
  top: 2100px;
  left: 277px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 40px;
  opacity: 1;
  text-align: center;
}
.containerbox {
  width: 2000px;
  height: 1000px;
  background: rgba(69,69,69,1);
  opacity: 1;
  position: absolute;
  top: 2500px;
  overflow: hidden;
}
.containerboxsentence {
  width: 1100px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 2750px;
  left: 641px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 30px;
  opacity: 1;
  text-align: left;
}
.containerboxname {
  width: 91px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 2870px;
  left: 641px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 15px;
  opacity: 1;
  text-align: left;
}
.containerboxemail {
  width: 91px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 3000px;
  left: 641px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 15px;
  opacity: 1;
  text-align: left;
}
.containerboxcomment {
  width: 335px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 3150px;
  left: 641px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 15px;
  opacity: 1;
  text-align: left;
}
.containerboxinformation {
  width: 376px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 2750px;
  left: 57px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.containerboxsupport {
  width: 376px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 2900px;
  left: 57px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.containerboxveriv {
  width: 376px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 3000px;
  left: 57px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.containerboxfollow {
  width: 376px;
  color: rgba(168,168,168,1);
  position: absolute;
  top: 3300px;
  left: 57px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: left;
}
.containerboxcontact {
  width: 972px;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 2580px;
  left: 474px;
  font-family: Montserrat;
  font-weight: Bold;
  font-size: 60px;
  opacity: 1;
  text-align: center;
}
.containerwriteboxname {
  width: 1220px;
  height: 60px;
  background: rgba(141,138,138,1);
  opacity: 1;
  position: absolute;
  top: 2900px;
  left: 641px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: none;
  font-size: large;
  outline: none;
}
.containerwriteboxemail {
  width: 1220px;
  height: 60px;
  background: rgba(141,138,138,1);
  opacity: 1;
  position: absolute;
  top: 3030px;
  left: 641px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: none;
  font-size: large;
  outline: none;
}
.containerwriteboxcomment {
  width: 1220px;
  height: 145px;
  background: rgba(141,138,138,1);
  opacity: 1;
  position: absolute;
  top: 3190px;
  left: 641px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border: none;
  font-size: large;
  outline: none;
}
.containerboxsend {
  width: 597px;
  height: 41px;
  background: rgba(64,68,237,1);
  padding: 10px 239px;
  margin: 10px;
  opacity: 1;
  position: absolute;
  top: 3400px;
  left: 941px;
  overflow: hidden;
  display: inline-block;
  transition: transform 0.3s ease;
}
.containerboxsend:hover {
  transform: scale(1.1);
}
.containerboxsendsubmit {
  width: 100%;
  color: rgba(255,255,255,1);
  position: absolute;
  top: 10px;
  left: 0px;
  font-family: Montserrat;
  font-weight: Regular;
  font-size: 20px;
  opacity: 1;
  text-align: center;
  background-color: rgba(64,68,237,1);
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.containerboxsendsubmit:hover {
  background-color: rgba(64,68,237,1); 
  color: white;
}
.containerboxemailpartner {
  width: 417px;
  color: rgba(0,178,255,1);
  position: absolute;
  top: 2780px;
  left: 57px;
  font-family: Montserrat;
  font-weight: Light;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.containerboxemailsupport {
  width: 417px;
  color: rgba(0,178,255,1);
  position: absolute;
  top: 2930px;
  left: 57px;
  font-family: Montserrat;
  font-weight: Light;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.containerboxemailvoe {
  width: 417px;
  color: rgba(0,178,255,1);
  position: absolute;
  top: 3030px;
  left: 57px;
  font-family: Montserrat;
  font-weight: Light;
  font-size: 25px;
  opacity: 1;
  text-align: left;
}
.linkedin {
  width: 48px;
  height: 48px;
  background: url("C:/Coding/tekweb/final-project/src/assets/linkedin.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 3340px;
  left: 266px;
  overflow: hidden;
}
.twitter {
  width: 48px;
  height: 48px;
  background: url("C:/Coding/tekweb/final-project/src/assets/twitter.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 3340px;
  left: 196px;
  overflow: hidden;
}
.instagram {
  width: 47px;
  height: 47px;
  background: url("C:/Coding/tekweb/final-project/src/assets/instagram.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 3340px;
  left: 127px;
  overflow: hidden;
}
.facebook {
  width: 48px;
  height: 48px;
  background: url("C:/Coding/tekweb/final-project/src/assets/facebook.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 3340px;
  left: 57px;
  overflow: hidden;
}
.bottomcontainer1 {
  width: 574px;
  color: rgba(62,62,62,1);
  position: absolute;
  top: 3510px;
  left: 81px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: center;
}
.bottomcontainer2 {
  width: 193px;
  color: rgba(62,62,62,1);
  position: absolute;
  top: 3510px;
  left: 1388px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: center;
}
.bottomcontainer3 {
  width: 193px;
  color: rgba(62,62,62,1);
  position: absolute;
  top: 3510px;
  left: 1645px;
  font-family: Libre Baskerville;
  font-weight: Bold;
  font-size: 20px;
  opacity: 1;
  text-align: center;
}
</style>