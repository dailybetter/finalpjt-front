<template>
  <div class="p-0" @click="movie_click">
    <img :src="`${movie.poster_path}`" alt="" class="movieImg m-2 w-40 object-contain"  />
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {};
  },
  props: {
    movie: Object,
  },
  methods: {
    movie_click() {
      this.$router.push({name: 'MovieDetail', params: {'id': this.movie.mid }})
    }
  }
};
</script>

<style>
.movieImg:hover {
  transform: scale(1.1);
  /* cursor: url(@/assets/emoji-cursor.png) 25 25, auto; */
}
</style>
