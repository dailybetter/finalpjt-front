<template>
  <div class="wrapper-stepper">
    <div class="stepper">
      <div class="stepper-progress">
        <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
      </div>

      <div class="stepper-item current" :class="{'current': step == item, 'success': step>item}" v-for="item in 4" :key="item" >
        <div class="stepper-item-counter">
          <img src="@/assets/check-mark.png" alt="" class="icon-success">
          <span class="number">
            {{item}}
          </span>
        </div>
        <span class="stepper-item-title">
          step {{item}}
        </span>
      </div>
    </div>
    <div class="stepper-content" v-for="item in 4" :key="item">
      <div class="stepper-pane" v-if="step == item">
        container입니다<span class="tx-green-1">{{step}}</span>번째
      </div>
    </div>
    <div class="stepper-content">
      <div class="stepper-complete" v-if="step == 5" :disabled="step<5">
        <img class= "stepper-complete stepper-complete--img" src="@/assets/welcomeEmoji.gif" alt="">
        <button class="btn btn--complete" @click="goMain" :disabled="step<5">
        Go
        </button>
      </div>

    </div>
    <div class="controls">
      <button class="btn" @click="step--" :disabled="step == 1 ||step == 5">
        Before
      </button>
      <button class="btn btn--complete" @click="step++" :disabled="step<4 || step == 5">
        Complete
      </button>
      <button class="btn btn--green-1" @click="step++" :disabled="step == 4 || step == 5">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      step: 1

    }
  },
  computed: {
    stepperProgress() {
      if(this.step == 5){
        return 100 +'%'
      } else{
      return (100/3)*(this.step - 1) + '%'
      }
    }
  },
  methods: {
    goMain(){
      console.log('gomain')
    }
  }


}
</script>

<style lang="scss">
  @import "./Signup.scss"
</style>