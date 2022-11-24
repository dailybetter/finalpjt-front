<template>
  <nav class="bg-transparent mt-7 px-2 sm:px-4 py-2.5 rounded">
    <div
      class="container bg-transparent flex flex-wrap items-center justify-between mx-auto"
    >
      <div class="flex">
        <div
          class="flex-start text-5xl font-mono font-semibold whitespace-nowrap text-white"
        >
          M 🧐 V I E
        </div>
      </div>
      <div class="flex flex-row">
        <div
          class="bg-transparent w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul
            class="bg-transparent flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md"
          >
            <li>
              <router-link
                :to="{ name: 'main' }"
                class="block py-2 pl-3 pr-4 font-bold hover:text-lime-300 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white text-lg"
                aria-current="page"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'IntroView' }"
                class="block py-2 pl-3 pr-4 font-bold hover:text-lime-300 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white text-lg"
                aria-current="page"
                >Intro</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'SignupView' }"
                class="block py-2 pl-3 pr-4 font-bold hover:text-lime-300 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white text-lg"
                aria-current="page"
                >Signup</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'LogoutView' }"
                class="block py-2 pl-3 pr-4 font-bold hover:text-lime-300 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white text-lg"
                aria-current="page"
                >Logout</router-link
              >
            </li>
          </ul>
        </div>
        <form @submit.prevent="search_movie" class="h-full">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >Search</label
          >
          <div class="relative ml-5 md:w-auto">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              v-model="query"
              id="default-search"
              class="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movie"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      query: null,
    };
  },
  // computed: {
  //   isTop: true,
  // },
  methods: {
    search_movie() {
      this.$store.dispatch("search_movie", this.query);
    },
  },
};
</script>

<style></style>
