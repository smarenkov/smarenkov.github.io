<template>
  <div class="row center-xs middle-xs">

    <div class="main-block col-xs-12 col-md-10 col-lg-8"
         @mouseenter="mouseoverUpdate(true)" @mouseleave="mouseoverUpdate(false)">

    <div class="myself">
      <img class="col-xs-7 col-sm-6 col-md-5 col-lg-4" src="../assets/img/me.jpg" alt="Simon Marenkov">
    </div>

<!--      Mobile-->
      <div v-if="isMobile" class="name-block name-block-mobile">
        <transition name="name-block">
          <div v-if="show">
            <span>Simon Marenkov</span>
          </div>
        </transition>
      </div>

<!--      Desktop-->
      <div v-if="!isMobile" class="name-block name-block-desktop">
        <transition name="name-block">
          <div v-if="show">
            <span>S</span><span>imon</span>
            <span v-if="!mouseover">.</span><span v-if="mouseover" style="padding-left: 30px"></span>
            <span>Marenkov</span>
          </div>
        </transition>
      </div>

      <div class="row center-xs skills-box">
        <div class="col-xs-12">
          <h1 class="title-typing-effect">
            <span class="typed-text">{{ typingEffect.text }}</span>
            <span class="cursor" :class="{'typing': TypingEffect.isTypeStateTyping(typingEffect)}">&nbsp;</span>
          </h1>
        </div>

        <div class="col-xs col-sm" @click="TypingEffect.addToTyping(web, typingEffect)">
          <h2>Web</h2>
          <img class="icon" src="../assets/img/icon/javascript.png" alt="javascript-icon">
          <img class="icon" src="../assets/img/icon/vue.png" alt="vue-icon">
          <img class="icon" src="../assets/img/icon/java.png" alt="java-icon">
        </div>

        <div class="col-xs col-sm" @click="TypingEffect.addToTyping(mobile, typingEffect)">
          <h2>Mobile</h2>
          <img class="icon" src="../assets/img/icon/flutter.png" alt="flutter-icon">
          <img class="icon" src="../assets/img/icon/dart.png" alt="dart-icon">
        </div>

        <div class="col-xs col-sm" @click="TypingEffect.addToTyping(game, typingEffect)">
          <h2>Game</h2>
          <img class="icon" src="../assets/img/icon/unity.png" alt="unity-icon">
          <img class="icon" src="../assets/img/icon/c-sharp.png" alt="c-sharp-icon">
        </div>
      </div>

      <hr class="contact-me-line">

      <div class="row center-xs contact-me">
<!--        GitHub-->
        <div class="icon">
          <a href="https://github.com/smarenkov" target="_blank">
            <img src="../assets/img/icon/github.png" alt="GitHub-icon">
          </a>
        </div>
<!--        LinkedIn-->
        <div class="icon">
          <a href="https://www.linkedin.com/in/simon-marenkov-b14078173/" target="_blank">
            <img src="../assets/img/icon/linkedin.png" alt="LinkedIn-icon">
          </a>
        </div>
<!--        Telegram-->
        <div class="icon">
          <a href="https://t.me/smarenkov" target="_blank">
            <img src="../assets/img/icon/telegram.png" alt="Telegram-icon">
          </a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect';
import TypingEffect, {TypingState} from "../assets/js/typingEffect";

export default {
  name: 'AboutMe',

  data() {
    return {
      isMobile: isMobile,
      mouseover: false,
      show: false,

      web: "Full Stack Web Developer",
      mobile: "Flutter Mobile Developer",
      game: "Unity Game Developer",

      TypingEffect: TypingEffect.prototype,
      typingEffect: null,
    }
  },

  created() {
    this.typingEffect = new TypingEffect('', TypingState.None, ['Select Skills'], 90, 40, 200, 0, 0);
    this.TypingEffect.startTyping(this.typingEffect)
  },

  mounted() {
    this.showName();
  },

  methods: {
    mouseoverUpdate(value) {
      this.mouseover = value;
    },
    showName() {
      this.show = true;
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/typeEffect.scss";
</style>
