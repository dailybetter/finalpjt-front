<template>
  <div>
    <div class="wrapper">
      <h1>Hello there!</h1>
    </div>
    <div class="welcome-section content-hidden">
      <div class="content-wrap">
        <ul class="fly-in-text">
          <li>M</li>
          <li>π§</li>
          <li>V</li>
          <li>I</li>
          <li>E</li>
        </ul>
        <!-- <a href="#" class="enter-button" @click="goMain">Please Enter</a> -->
        <div class="enter-button">
          <form v-on:submit.prevent="submitForm" class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <input v-model="username" type="text" name="username" id="username" placeholder="ID" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="">
                  </div>
                  <div>
                      <input v-model="password" type="password" name="password" id="password" placeholder="PassWord" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required="">
                  </div>
                  <button type="submit" class="w-full text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center">λ‘κ·ΈμΈ</button>
                  <p class="text-sm font-light text-white">
                      νμμ΄ μλκ°μ? <router-link :to="{name: 'SignupView'} ">SIGN UP</router-link>
                  </p>
              </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IntroView',
  data() {
    return{
      username: null,
      password: null,
    }
  },
  created() {
    // const welcomSection = document.querySelector('.welcome-section');
    this.lightOn()
  },
  methods: {
    goMain() {
      const welcomSection = document.querySelector('.welcome-section');
      // event.preventDefault();
      welcomSection.addClass('content-hidden').fadeOut();
    },
    lightOn() {
      setTimeout(() => {
        const welcomSection = document.querySelector('.welcome-section');
        welcomSection.classList.remove('content-hidden');
      }, 80);
    },
    submitForm() {
      const {username, password} = this
      const payload = {
        username,
        password,
      }
      this.$store.dispatch("login",payload)
      this.username = ""
      this.password = ""
    }
  },
};

//λΉλκΈ° λ¬Έμ 
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  font-weight: 700;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: lighter;
  font-size: 40px;
}
.welcome-section {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  overflow: hidden;
}
.content-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fly-in-text {
  list-style: none;
}
.fly-in-text li {
  display: inline-block;
  margin-right: 20px;
  font-size: 5em;
  color: #fff;
  opacity: 1;
  transition: all 3s ease;
}
.fly-in-text li:nth-child(5) {
  margin-right: 0;
}
.enter-button {
  display: block;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  transition: all 1s ease 2s;
}
.content-hidden .fly-in-text li,
.content-hidden .enter-button {
  opacity: 0;
}
.content-hidden .fly-in-text li:nth-child(1) {
  transform: translate3d(-60px, 0, 0);
}
.content-hidden .fly-in-text li:nth-child(2) {
  transform: translate3d(-30px, 0, 0);
}
.content-hidden .fly-in-text li:nth-child(3) {
  transform: translate3d(0px, 0, 0);
}
.content-hidden .fly-in-text li:nth-child(4) {
  transform: translate3d(30px, 0, 0);
}
.content-hidden .fly-in-text li:nth-child(5) {
  transform: translate3d(60px, 0, 0);
}
.content-hidden .enter-button {
  transform: translate3d(0, 30px, 0);
}
</style>
