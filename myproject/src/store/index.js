import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate'
import router from "@/router/index"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    movies_by_genres: [],
    movie_recommendation1: [],
    movie_recommendation2: [],
    now_playing_movies: [],
    search_movies: [],
  },
  plugins: [
    createPersistedState({
      paths: ["token"],
    })
  ],
  getters: {},
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.token = null;
    },
    GET_MOVIES_BY_GENRES(state, movieInfo) {
      state.movies_by_genres = movieInfo;
    },
    GET_MOVIE_RECOMMENDATION1(state, movieInfo) {
      state.movie_recommendation1 = movieInfo;
    },
    GET_MOVIE_RECOMMENDATION2(state, movieInfo) {
      state.movie_recommendation2 = movieInfo;
    },
    GET_NOW_PLAYING_MOVIES(state, movieInfo) {
      state.now_playing_movies = movieInfo;
    },
    SEARCH_MOVIE(state, movies) {
      state.search_movies = movies
    },
  },
  actions: {
    get_movies(context) {
      const BASE_URL = "http://127.0.0.1:8000/movies/";
      const urls = [
        "",
        "movie-recommendation1/",
        "movie-recommendation2/",
        "now-playing-movies/",
      ];
      const mutations = [
        "GET_MOVIES_BY_GENRES",
        "GET_MOVIE_RECOMMENDATION1",
        "GET_MOVIE_RECOMMENDATION2",
        "GET_NOW_PLAYING_MOVIES",
      ];
      const headers = {
        "Authorization": `Token ${context.state.token}`,
      };
      urls.forEach((url, index) => {
        axios
          .get(BASE_URL + url, {headers})
          .then((res) => {
            const movieInfo = res.data;
            context.commit(mutations[index], movieInfo);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    login(context, payload) {
      const {username, password} = payload
      const BASE_URL = "http://127.0.0.1:8000/accounts/"
      const URL = "login/"
      axios.post(BASE_URL+URL, {
        username,
        password,
      })
      .then((response) => {
        context.commit("SET_TOKEN", response.data.key)
        router.push({name: "main"})
      })
      .catch((error) => {
        console.log(error)
      })
      
    },
    logout(context) {
      const BASE_URL = "http://127.0.0.1:8000/accounts/"
      const URL = "logout/"
      const headers = {
        "Authorization": `Token ${context.state.token}`,
      };
      axios.post(BASE_URL+URL, {}, {headers})
      .then(() => {
        context.commit("LOGOUT")
      })
      .catch((error) => {
        console.log(error)
      })
    },
    search_movie(context, query) {
      const BASE_URL = "http://127.0.0.1:8000/movies/search"
      axios.get(BASE_URL, {
        params: {
          query: query,
        }
      })
      .then((response) => {
        const movies = response.data
        context.commit("SEARCH_MOVIE", movies)
        if (router.currentRoute.name !== "SearchView") {
          router.push({name:"SearchView"})
        }
      })
      .catch((error) => {
        console.log(error)
      })
    },
    },
  modules: {},
  },
);
