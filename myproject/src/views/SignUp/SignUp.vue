<template>
  <div class="wrapper-stepper m-36">
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
            <div class="mb-2" v-if="username.length">{{ idChecker ? "사용가능한 ID입니다.👌" : "❌중복ID입니다.❌"}}</div>
            <input class = "userInput mb-2" type="text" v-model="username" id="username" placeholder="ID를 입력해주세요" @input="check">
            <!-- </div> -->
            <!-- <div class="input-group"> -->
            <div class = "passwordInput">
              <input :type="inputType"  v-model="password" placeholder="PW를 입력해주세요" class="input mb-2" />
              <button class="input-group-icon" @click.prevent="togglePassword">
                {{ toggleBtnIcon }}
              </button>
            </div>
            </div>
          </div>
          <!-- container입니다<span class="tx-green-1">{{step}}</span>번째 -->
        </div>
        <div class="stepper-pane flex" v-if="step == 2">
          당신의 최애 장르는 무엇인가요?
          <select name="genres" id="genres" type="genres" v-model="genrepick" @click="genreChange" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500">
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
        <!-- <div class="stepper-pane genrePicker" v-if="step == 3"> -->
        <div class="my-8 text-2xl " v-if="step == 3">가장 마음에 드는영화는 무엇인가요?</div>
        <div class="grid grid-cols-3 gap-3 mb-3" v-if="step == 3">
          <div v-for="(movie, index) in getMovies" :key="movie.mid" class ="mx-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <input type="checkbox" :id="index" name="genres" @click="checkboxClick(movie.mid)">
            <label :for="`movie${index}`">
              <img :src="movie.poster_path"/>
            </label>
          </div>
        </div>
        <div class="stepper-complete" v-if="step == 4" :disabled="step<4">
          <img class= "stepper-complete stepper-complete--img" src="@/assets/welcomeEmoji.gif" alt="">
          <h2>잠시후 메인화면으로 이동합니다!</h2>
        </div>
      </div>
      <div class="controls">
        <button class="btn" @click.prevent="step--" :disabled="step == 1 ||step == 5">
          Before
        </button>
        <button class="btn btn--green-1" @click.prevent="clickNext" :disabled="step == 4 || step == 5 || !idCheck">
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUpView',
  data(){
    return{
      step: 1,
      username: "",
      showPassword: false,
      password: "",
      mids: [],
      genrepick: "",
      pickedgenreMovies:[],
      genres: "",
      isGenreChange: false,
      isDone: false,
      movies: [],
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
    getMovies(){
      return this.movies
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
          this.pickedgenreMovies = res
          this.movies = res.data
        })
        .catch((err) =>{
          console.log(err)
        })
    },
    dataPost(){
      axios.post(`http://127.0.0.1:8000/accounts/signup/`,
      {
          username: this.username,
          password1: this.password,
          password2: this.password,
          mids: this.mids
      })
      .then((response) => {
        this.$store.commit("SET_TOKEN", response.data.key)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    goMain(){
      console.log('gomain')
    },
    togglePassword() {
            this.showPassword = !this.showPassword;
    },
    genreChange() {
      this.isGenreChange = true
    },
    checkboxClick(mid) {
      if (this.mids.includes(mid)) {
        this.mids.splice(this.mids.indexOf(mid), 1)
      } else {
        this.mids.push(mid)
      }
    },
    clickNext() {
      let flag = true
      if (this.step === 2) {
        if (this.isGenreChange) {
          this.isGenreChange = false
          this.getGenres()
        }
      } else if (this.step === 3) {
        if (this.mids.length === 0) {
            flag = false
            alert("영화를 한개 이상 선택해 주세요!")
        }
        else if (!this.isDone) {
          this.isDone = true
          this.dataPost()
          setTimeout(() => {
            this.$router.push({name: "main"})
          }, 2000)
        }
      }
      if (flag) {
        this.step++
      } 
    }
  }
}
</script>



<style lang="scss">
  @import "./Signup.scss"
</style>