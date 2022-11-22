<template>
  <div class="px-3">
    <div class="flex flex-shrink-0 relative w-full sm:w-auto">
      <img
        :src="`${movie.poster_path}`"
        alt="#"
        class="object-cover object-center w-full"
      />
      <div class="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        <div class="flex h-full items-end pb-6">
          <!-- <h3
            class="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"
          >
          </h3> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'CarouselItem',
    props: {
        movie: Object,
    },

};
</script>

<style></style>
