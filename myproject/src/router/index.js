import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/Main/MainView.vue'
import IntroView from '@/views/IntroView'
import MovieDetailView from '@/views/MovieDetailView'
import SignupView from '@/views/SignUp/SignUp.vue'
import LogoutView from '@/views/LogoutView'
import SearchMovieView from "@/views/SearchMovieView"
Vue.use(VueRouter)

const routes = [
    {
      path: '/main',
      name: 'main',
      component: MainView
    },
  // {
    //   path: '/movierecommend',
    //   name: 'MovieRecommend',
    //   component: MovieRecommend
    // },
    // {
      //   path: '/profile',
      //   name: 'Profile',
      //   component: Profile
      // },
      {
        path: '/',
        name: 'IntroView',
        component: IntroView
      },
      {
        path: '/search',
        name: 'SearchView',
        component: SearchMovieView,
        props: true,
      },
      {
        path: '/signup',
        name: 'SignupView',
        component: SignupView
      },
      {
        path: '/logout',
        name: 'LogoutView',
        component: LogoutView,
      },
      //  MOVIE-DETAIL
       {
         path: '/movie/:id',
         name: 'MovieDetail',
         component: MovieDetailView,
       },
    ]
    
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
