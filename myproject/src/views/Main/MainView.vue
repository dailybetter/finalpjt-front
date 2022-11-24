<template>
<keep-alive>
  <div id="Main">
    <div class="movieContainer m-8">
      <h2 class="title text-left text-2xl font-bold uppercase mx-8 text-white">
        좋아하는 장르 기반 추천
      </h2>
      <CarouselView :movies="movie_recommendation1" />
    </div>

    <div class="movieContainer m-8">
      <h2 class="title text-left text-2xl font-bold uppercase mx-8 text-white">
        좋아하는 영화 기반 추천
      </h2>
      <CarouselView :movies="movie_recommendation2" />
    </div>

    <div class="movieContainer m-8">
      <h2 class="title text-left text-2xl font-bold uppercase mx-8 text-white">
        현재 상영중인 영화
      </h2>
      <CarouselView :movies="now_playing_movies" />
    </div>

    <div
      class="movieContainer m-8"
      v-for="(movieset, name, index) in movies_by_genres"
      :key="'movieset-' + index"
    >
      <h2 class="title text-left text-2xl font-bold uppercase mx-8 text-white">
        {{ name }}
      </h2>
      <CarouselView :movies="movieset" />
    </div>
  </div>
</keep-alive>
</template>

<script>
import CarouselView from "@/views/Main/CarouselView"
export default {
  name: "MainView",
  components: {
    CarouselView,
  },
  mounted() {
    this.get_movies()
  },

  data() {
    return {};
  },
  computed: {
    movies_by_genres() {
      return this.$store.state.movies_by_genres
    },
    movie_recommendation1() {
      return this.$store.state.movie_recommendation1
    },
    movie_recommendation2() {
      return this.$store.state.movie_recommendation2
    },
    now_playing_movies() {
      return this.$store.state.now_playing_movies
    },
  },
  methods: {
    get_movies() {
      if (this.$store.state.movies_by_genres.length === 0) {
        this.$store.dispatch("get_movies")
      }
    },
  },
};
</script>

<style>
#Main {
  background-color: #111;
}
</style>
