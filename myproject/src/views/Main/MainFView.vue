<template>
  <div>
    <h2>액션 캐러세루</h2>
    <CarouselView :genreMovies="firstpickMovies"/>
  </div>
</template>

<script>
import axios from 'axios'
import CarouselView from './CarouselView.vue'
export default {
    name:'MainView',
    created() {
        this.getGenres()
    },
    components: {
        CarouselView,
    },
    data() {
        return{
            firstpickMovies:[],
            firstpick:"액션"

        }
    },
    methods: {
        getGenres(){
      axios.get(`http://127.0.0.1:8000/accounts/buildup/related-movies/`,{
        params: {
          'genre':this.firstpick
        }
      })
        .then((res) =>{
          this.firstpickMovies = res.data
            console.log(res)
        })
        .catch((err) =>{
          console.log(err)
        })
}
}
}
</script>

<style>

</style>