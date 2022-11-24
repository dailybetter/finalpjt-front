<template>
    <div class="grid grid-cols-5 mt-10" style="width: 1200px;">
        <div v-for="movie in movies" :key="movie.id">
            <MovieCard :movie="movie" />
            {{ movie.title }}
        </div>
    </div>
</template>

<script>
import MovieCard from "../views/Main/MovieCard.vue"
export default {
    name: "SearchMovieView",
    components: {
        MovieCard,
    },
    computed: {
        movies() {
            return this.$store.state.search_movies
        }
    },
    beforeRouteLeave(to, from, next) {
        if (to.name !== from.name && to.name !== "MovieDetail") {
            const input = document.querySelector("#default-search")
            input.value = ""
        }
            next()
    },
}
</script>
<style>

</style>