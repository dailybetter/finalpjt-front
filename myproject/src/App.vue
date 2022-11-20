<template>
  <div>
    <!-- <intro-view></intro-view> -->
    <SignUpView/>
  </div>
</template>

<script>
// import HelloTailVue from './views/HelloTail.vue';
// import IntroView from './views/IntroView.vue';
import SignUpView from './views/SignUp.vue'
export default {
  components: { SignUpView },
  comments: {
    SignUpView
    // IntroView,
    // HelloTailVue
  }
}
</script>

<style>

</style>