<template>
    <div>
      <h1 v-if="!movie">Loading..</h1>
      <div
        v-if="movie"
        class="mcontainer pr-10 "
        :style="{ 'background-image': `url(${movie.backdrop_path})`}"
      >
        <div class="movieInfo sticky font-bold text-lg" style="top: 200px;">
          <div class="h-3/5 flex justify-center mb-4">
            <img
              :src="movie.poster_path"
              alt="movie poster path"
              class="h-full"
            />
          </div>
          <div class="detail basis-1/5 flex flex-col align-center">
            <h1>{{ movie.title }}</h1>
            <p>{{ movie.release_date }}</p>
            <p>평점: {{ movie.vote_average }}</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                v-if="!movie.like"
                @click="like"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                v-if="movie.like"
                @click="like"
                fill="red"
                class="w-6 h-6 inline-block"
              >
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="overview flex flex-col mb-5">
          <div
            class="bg-transparent text-white underline decoration-green-400 basis-1/5 text-white font-bold py-2 px-4 rounded"
          >
            <h1 class="text-2xl" style="text-align: left">Overview</h1>
          </div>
          <div
            class="basis-4/5 bg-gray-700/50 text-white py-2 px-4 rounded opacity-90 flex justify-center align-center"
          >
            <div class="table">
              <p class="table-cell align-middle">
                {{ movie.overview }}
              </p>
            </div>
          </div>
        </div>
        <div class="actors flex flex-col">
          <div class="bg-transparent text-white underline decoration-green-400 font-bold py-2 px-4 rounded">
            <h1 class="text-2xl" style="text-align: left">Actors</h1>
          </div>
          <div
            class="basis-4/5 grid grid-cols-3 gap-y-12 gap-x-2 bg-gray-700/50 text-white py-16 px-4 rounded opacity-90 clear-none"
          >
            <div
              v-for="actor in movie.credits"
              :key="actor.id"
              class="flex flex-row justify-center items-center clear-none"
              @click="actor_detail(actor)"
            >
              <div
                class="actorsBox w-80 h-32 flex bg-black drop-shadow-2xl rounded-lg p-1.5 overflow-hidden"
              >
                <img
                  class="w-28 h-28 rounded-full border-1 border-slate-50 object-cover"
                  :src="actor.profile_path"
                />
                <div class="flex flex-col px-3 py-1">
                  <h4 class="font-bold text-lg text-white-600">
                    {{ actor.name }}
                  </h4>
                  <p class="mt-1 flex-1 font-light text-sm text-slate-500">
                    배역: {{ actor.character }}
                  </p>
                  <div>
                    <!-- <button
                      class="mt-1 inline-block px-5 py-1 border bg-blue-500 text-center text-white text-sm hover:underline rounded"
                      @click="actor_detail(actor)"
                    >
                      View Profile
                    </button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment">
          <div class="bg-transparent text-white underline decoration-green-400 text-white font-bold py-2 px-4 rounded">
            <h1 class="text-2xl" style="text-align: left">Comments</h1>
          </div>
          <div class="bg-gray-700/50 py-10 px-4 rounded opacity-90">
            <CommentList :mid="movie.mid" />
          </div>
        </div>
      </div>
      <div class="review"></div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import CommentList from "@/components/CommentList";
  // import ToggleFavorite from "@/components/favoritButton/ToggleFavorite"
  export default {
    name: "MovieDetail",
    components: {
      CommentList,
      // ToggleFavorite,
    },
    data() {
      return {
        movie: null,
      };
    },
    // props: {
    //   mid : Number,
    // },
    created() {
      const mid = 505642;
      const token = "f8e6f3d2dc64dfbf039f5163bbc48c8cf94e77d5";
      const BASE_URL = "http://127.0.0.1:8000/";
      // URL = `movies/${this.mid}/`
      const URL = `movies/${mid}/`;
  
      axios
        .get(BASE_URL + URL, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          this.movie = response.data;
          console.log(this.movie);
        })
        .catch((error) => {
          console.log(error);
        });
  
        this.$store.dispatch("get_movies")
    },
    methods: {
      actor_detail(actor) {
        const BASE_URL = "https://www.themoviedb.org/person/";
        window.open(BASE_URL + actor.id);
      },
      like() {
        const mid = 505642;
        const token = "f8e6f3d2dc64dfbf039f5163bbc48c8cf94e77d5";
        const BASE_URL = "http://127.0.0.1:8000/";
        // const URL = `movies/${this.mid}/like/`
        const URL = `movies/${mid}/like/`;
  
        axios
          .post(
            BASE_URL + URL,
            {},
            {
              headers: {
                Authorization: `Token ${token}`,
                // "Authorization": `Token ${this.$store.state.token}`,
              },
            }
          )
          .then((response) => {
            console.log(response);
            this.movie.like = !this.movie.like;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style>
  /* 디테일 작업 진행 예정 */
  .mcontainer {
    display: grid;
    grid-template-columns: 0.6fr 0.6fr 1fr 1fr 1fr 1fr;
    /* grid-template-columns: repeat(6, 1fr); */
    grid-template-rows: 1fr 1fr 1fr 1fr minmax(1fr, 4fr) minmax(1fr, 4fr);
    /* background-color: lightgray; */
    padding: 30px 0px;
    margin: 0px 100px;
    background-size: contain;
    /* background-repeat: no-repeat; */
    /* background-position: center; */
    color: white;
  }
  .overview {
    grid-column: 3 / 7;
    grid-row: 1;
  }
  .movieInfo {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
    margin: 0px 10px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .actors {
    grid-column: 3 / 7;
    grid-row: 2 / 5;
    /*
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto); */
  }
  .comment {
    grid-column: 3 / 7;
    grid-row: 5 / 7;
    overflow: hidden;
  }
  .actorsBox{
    cursor: url(@/assets/emoji-cursor.png) 25 25, auto;
  }
  </style>
  