<template>
  <div id="Main">
    <div class="movieContainer my-8">
      <h2 class="title text-2xl font-bold uppercase mx-8 text-white">
        HandMade Carousel
      </h2>
      <div class="movieRow flex overflow-x-scroll mt-4 p-4">
        <SimpleCarousel v-if="firstpickMovies>3 ?  : this.$forceUpdate()">
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[0].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[1].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[2].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[3].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[4].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[5].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                :src="firstpickMovies[6].poster_path"
                alt="#"
                class="moviePoster m-2 w-40"
              />
            </a>
          </div>
        </SimpleCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SimpleCarousel from "vue2-simple-carousel";
export default {
  name: "MainView",
  created() {
    this.getGenres();
  },
  components: {
    SimpleCarousel,
  },
  data() {
    return {
      firstpickMovies: [],
      firstpick: "액션",
    };
  },
  methods: {
    getGenres() {
      axios
        .get(`http://127.0.0.1:8000/accounts/buildup/related-movies/`, {
          params: {
            genre: this.firstpick,
          },
        })
        .then((res) => {
          this.firstpickMovies = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
#Main {
  background-color: #111;
}

.movieRow::-webkit-scrollbar {
  display: none;
}
.moviePoster:hover {
  transform: scale(1.09);
}
</style>
