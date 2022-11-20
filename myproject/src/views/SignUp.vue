<template>
  <div class="wrapper-stepper">
    <div class="stepper">
      <div class="stepper-progress">
        <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
      </div>

      <div class="stepper-item current" :class="{'current': step == item, 'success': step>item}" v-for="item in 4" :key="item" >
        <div class="stepper-item-counter">
          <img src="@/assets/icons8-check-mark-48.png" alt="" class="icon-success">
          <span class="number">
            {{item}}
          </span>
        </div>
        <span class="stepper-item-title">
          step {{step}}
        </span>
      </div>
    </div>
    <div class="stepper-content" v-for="item in 4" :key="item">
      <div class="stepper-pane" v-if="step == item">
        container입니다<span class="tx-green-1">{{step}}</span>번째
      </div>
    </div>
    <div class="controls">
      <button class="btn" @click="step--" :disabled="step == 1">
        Before
      </button>
      <button class="btn btn--green-1" @click="nextbtn" :disabled="step == 4">
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
      return (100/3)*(this.step - 1) + '%'
    }
  },
  methods: {
    nextbtn() {
      this.step++
      console.log('되긴됨')
      console.log(this.step)
    }
  }


}
</script>

<style lang="scss">
  @import "./Signup.scss"
</style>