<template>
  <div class="row center-xs middle-xs">

    <div class="main-block col-xs-12 col-md-10 col-lg-8" @mouseenter="Mouseover(true)" @mouseleave="Mouseover(false)">

      <img class="me" src="../assets/img/me.jpg" alt="Simon Marenkov">

      <div class="name-block name-block-mobile">
        <transition name="name-block">
          <div v-if="show">
            <span>Simon<br>Marenkov</span>
          </div>
        </transition>
      </div>

      <transition name="name-block">
        <div v-if="show" class="name-block name-block-desktop">
          <span>S</span><span>imon</span>
          <span v-if="!mouseover">.</span><span v-if="mouseover" style="padding-left: 30px"></span>
          <span>Marenkov</span>
        </div>
      </transition>

      <div class="row center-md skills-box">

        <div class="col-xs-12">
          <h1>Developer</h1>
        </div>

        <div class="col-xs col-sm">

          <h2>Web</h2>

          <img class="icon" src="../assets/img/icon/javascript.png" alt="javascript-icon">
          <img class="icon" src="../assets/img/icon/vue.png" alt="vue-icon">
          <img class="icon" src="../assets/img/icon/java.png" alt="java-icon">
        </div>

        <div class="col-xs col-sm">

          <h2>Mobile</h2>

          <img class="icon" src="../assets/img/icon/flutter.png" alt="flutter-icon">
          <img class="icon" src="../assets/img/icon/dart.png" alt="dart-icon">
        </div>

        <div class="col-xs col-sm">

          <h2>Game</h2>

          <img class="icon" src="../assets/img/icon/unity.png" alt="unity-icon">
          <img class="icon" src="../assets/img/icon/c-sharp.png" alt="c-sharp-icon">
        </div>
      </div>

      <hr class="contact-me-line">

      <div class="row center-xs contact-me">
<!--        GitHub-->
        <div class="icon">
          <a href="https://github.com/smarenkov">
            <img src="../assets/img/icon/github.png" alt="GitHub-icon">
          </a>
        </div>
<!--        LinkedIn-->
        <div class="icon">
          <a href="https://www.linkedin.com/in/semyon-marenkov-b14078173">
            <img src="../assets/img/icon/linkedin.png" alt="LinkedIn-icon">
          </a>
        </div>
<!--        Telegram-->
        <div class="icon">
          <a href="https://t.me/smarenkov">
            <img src="../assets/img/icon/telegram.png" alt="Telegram-icon">
          </a>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutMe',

  data(){
    return {
      mouseover: false,
      show: false
    }
  },

  mounted() {
    this.showName();
  },

  methods: {
    Mouseover: function (value) {
      this.mouseover = value;
      console.log(this.mouseover)
    },

    showName: function () {
      this.show = true;
    }
  }

}
</script>

<style>
  @import "../assets/css/style.css";
</style>
