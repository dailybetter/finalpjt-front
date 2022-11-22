<template>
  <div>
    <!-- <intro-view></intro-view> -->
    <!-- <SignUpView/> -->
    <MainView/>
  </div>
</template>

<script>
// import HelloTailVue from './views/HelloTail.vue';
// import IntroView from './views/IntroView.vue';
// import SignUpView from './views/SignUp.vue'
import MainView from './views/Main/MainView.vue';
export default {
  components: { MainView },
  comments: {
    MainView
    // SignUpView
    // IntroView,
    // HelloTailVue
  }
}
</script>

<style>

</style>