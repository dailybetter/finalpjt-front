<template>
  <div class="movie-list">
    <h1>Movie List</h1>
    <div class = "cardWraper">
      <MovieListItem
        v-for = "movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem';

export default {
    name: 'MovieList',
    components: { MovieListItem 
    },
    created() {
      this.$store.dispatch("get_movies")
    },
    computed: {
        movies(){
            return this.$store.state.movies
        }
    }
}
</script>

<style>
.movie-list {
  text-align: start;
}
.cardWraper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>