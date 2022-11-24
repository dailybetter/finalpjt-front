<template>
  <div id="app">
    <NavBar/>
    <div class = "main">
      <div class= 'dw' id = "bodyWrap">
        <!-- <MovieDetailView/> -->
        <!-- <MainView/> -->
        <!-- <HomeView/> -->
        <keep-alive include="SearchMovieView">
          <router-view :key="$route.fullPath"/>
        </keep-alive>
        <go-top/>
      </div>
    </div>
    <div class = "footer">

    </div>
  </div>
</template>
<script>
// import HomeView from '@/views/HomeView'
import GoTop from '@/components/GoTop'
// import MovieDetailView from '@/views/MovieDetailView'
// import MainView from '@/views/Main/MainView';
import NavBar from '@/components/NavBar.vue';



export default {
  name: 'App',
  components: {
    // HomeView,
    // MainView,
    GoTop,
    NavBar,
    // MovieDetailView,
  },
  data() {
    return {
      cacheList: [
        'SearchMovieView',
      ]
    }
  }
}
</script>

<style>
#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  background-color: #111;
  /* min-width: 900px;
  min-height: 700px; */
}
.dw {
  background-color: #111;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  height: 8vh;
  min-height: 5vh;
}

.main {
  display: grid;
  height: 90vh;

}

</style>
