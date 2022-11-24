<template>
  <div>
    <h1>Title</h1>
    <MovieList/>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'

export default {
  name: 'HomeView',
  components: {
    MovieList
  },
  computed: {

  },
  created() {
    // this.getMovies()
  },
  methods: {
    // getMovies(){
    // this.$store.dispatch('get_movies')
    // }
  }
}
</script>

<style>

</style>