<template>
  <div class="movieRow flex overflow-x-scroll mt-4 p-4">
        <Carousel class = "m-0"
          :perPageCustom="[
            [480, 3],
            [768, 4],
            [940, 5],
            [1200, 6],
            [1500, 7],
            [1800,8],
            [2100,9]
          ]"
          :navigationEnabled=true
          :centerMode = true
        >
          <slide
            v-for="(movie, idx) in movies"
            :key="`movie${idx}`"
            :movie="movie"
          >
            <MovieCard :movie="movie" />
          </slide>
        </Carousel>
      </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import MovieCard from "./MovieCard.vue";
export default {
    name: "CarouselView",
    components: {
        MovieCard,
        Carousel,
        Slide,
    },
    props: {
        movies: Array,
    }
}
</script>

<style>
.movieRow::-webkit-scrollbar {
  display: none;
}
.moviePoster:hover {
  transform: scale(1.09);
}
</style>