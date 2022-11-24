<template>
  <div>
    <h3>MovieItem</h3>
    <img :src = "imgSrc" class = "item" @click = "MovieDetail"/>
  </div>
</template>

<script>

export default {
    name: 'MovieListItem',
    data() {
        return {};

    },
    methods: {
        MovieDetail() {
            console.log('moviedetail')
            // this.$router.push({name:'MovieDetail', query: query })

        }
    },
    props: {
        movie: Object,
    },
    computed: {
        imgSrc() {
            return this.movie.poster_path
        }
    }
// const imgSrc = movie.poster_path

}
</script>

<style>
.item {
    width: 16rem;
    height: 24rem;
}
</style>