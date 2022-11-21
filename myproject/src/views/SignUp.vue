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
        <!-- <span class="stepper-item-title">
          step {{item}}
        </span> -->
      </div>
    </div>
    <form>
      <div class="stepper-content">
        <div class="stepper-pane" v-if="step == 1">
          <div class="inputBox">
            <div class="input-group">
            <input class = "userInput" type="text" v-model="username" id="username" placeholder="ID" @change="check">
            <div>{{ idChecker ? "✔" : "❌중복ID입니다.❌"}}</div>
            </div>
            <input :type="inputType" v-model="password1" class="input" />
            <div class="input-group">
              <input :type="inputType" v-model="password2" class="input" />
              <button class="input-group-icon" @click.prevent="togglePassword">
                {{ toggleBtnIcon }}
              </button>
            </div>
          </div>
          <!-- container입니다<span class="tx-green-1">{{step}}</span>번째 -->
        </div>
        <div class="stepper-pane" v-if="step == 2">
          당신의 최애 장르는 무엇인가요?
          <select name="genres" id="genres" type="genres" v-model="genrepick" @DOMActivate="getGenres">
            <option value="액션">액션</option>
            <option value="로맨스">로맨스</option>
            <option value="코미디">코미디</option>
            <option value="모험">모험</option>
            <option value="판타지">판타지</option>
            <option value="스릴러">스릴러</option>
            <option value="SF">SF</option>
            <option value="미스터리">미스터리</option>
            <option value="드라마">드라마</option>
            <option value="애니메이션">애니메이션</option>
            <option value="가족">가족</option>
            <option value="범죄">범죄</option>
            <option value="공포">공포</option>
            <option value="전쟁">전쟁</option>
            <option value="역사">역사</option>
            <option value="음악">음악</option>
            <option value="서부">서부</option>
            <option value="다큐멘터리">다큐</option>
            <option value="TV 영화">TV</option>
          </select>
        </div>
        <div class="stepper-pane genrePicker" v-if="step == 3">
          <div class ="mx-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" id="genres0" name="genres" v-model="genres">
            <label for="genres0"><img :src="genrePickCheck[0].poster_path"/></label>
          </div>
          <div class ="mx-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" id="genres1" name="genres" v-model="genres">
            <label for="genres1"><img :src="genrePickCheck[1].poster_path"/></label>
          </div>
          <div class ="mx-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" id="genres2" name="genres" v-model="genres">
            <label for="genres2"><img :src="genrePickCheck[2].poster_path"/></label>
          </div>
        </div>
        <div class="stepper-complete" v-if="step == 4" :disabled="step<4">
          <img class= "stepper-complete stepper-complete--img" src="@/assets/welcomeEmoji.gif" alt="">
        </div>
      </div>
      <!-- <div class="stepper-content">
        <div class="stepper-complete" v-if="step == 5" :disabled="step<5">
          <img class= "stepper-complete stepper-complete--img" src="@/assets/welcomeEmoji.gif" alt="">
          <button class="btn btn--complete" @click="goMain" :disabled="step<5">
          Go
          </button>
        </div>
      </div> -->
      <div class="controls">
        <button class="btn" @click.prevent="step--" :disabled="step == 1 ||step == 5">
          Before
        </button>
        <button class="btn btn--complete" @click.prevent="dataPost" :disabled="step<4 || step == 5">
          Welcome
        </button>
        <button class="btn btn--green-1" @click.prevent="step++" :disabled="step == 4 || step == 5 || !idCheck">
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      step: 1,
      username: "",
      showPassword: false,
      password1: "",
      password2: "",
      mids: [],
      genrepick: "",
      genres:"",
      idCheck: false,
      genreMid:[],
    }
  },
  computed: {
    stepperProgress() {
      if(this.step == 5){
        return 100 +'%'
      } else{
      return (100/3)*(this.step - 1) + '%'
      }
    },
    inputType() {
            return this.showPassword ? "text" : "password";
        },
    toggleBtnIcon() {
            return this.showPassword ? "🐵" : "🙈";
        },
    idChecker(){
      return this.idCheck
    } ,
    genrePickChecker(){
      return this.genrePickCheck.length
    },
    
    
  },
  methods: {
    check(){
      axios.get(`http://127.0.0.1:8000/accounts/buildup/username-validation/`, {
        params: {
          'username': this.username,
        }
      })
        .then((res)=>{
          // console.log(res)
          this.idCheck = res.data.valid
      
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getGenres(){
      axios.get(`http://127.0.0.1:8000/accounts/buildup/related-movies/`,{
        params: {
          'genre':this.genrepick
        }
      })
        .then((res) =>{
          this.genrePickCheck.push(res.data[0], res.data[1], res.data[2])
          console.log(this.genrePickCheck) 
        })
        .catch((err) =>{
          console.log(err)
        })
    },
    dataPost(){
      axios.post(`http://127.0.0.1:8000/accounts/signup/`,{
        data: {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
          mids: this.genrePickCheck
        }
      })
    },
    goMain(){
      console.log('gomain')
    },
    togglePassword() {
            this.showPassword = !this.showPassword;
        }
  }
}
</script>



<style lang="scss">
  @import "./Signup.scss"
</style>