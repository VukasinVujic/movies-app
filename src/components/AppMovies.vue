<template>
  <div>
    <movie-search @search-term-change="onSearchTermChange"></movie-search>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import MoviesServices, { movies } from "../services/MoviesService.js";
import MovieRow from "../components/MovieRow";
import MovieSearch from "../components/MovieSearch.vue";

export default {
  components: {
    MovieRow,
    MovieSearch
  },
  data() {
    return {
      movies: []
    };
  },
  methods: {
    onSearchTermChange(term) {
      MoviesServices.getAll(term).then(({ data }) => {
        this.movies = data;
      });
    }
  },

  beforeRouteEnter(to, from, next) {
    movies
      .getAll()
      .then(response => {
        next(vm => {
          vm.movies = response.data;
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
</style>
