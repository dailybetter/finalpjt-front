<template>
  <a href="#">
    <img
      :src="`${movie.poster_path}`"
      alt=""
      style="width: 100%"
    />
  </a>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Array,
  },
};
</script>

<style>
</style>
