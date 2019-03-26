<template>
  <div>
    <movie-list :movies="movies"></movie-list>
  </div>
</template>

<script>
import MovieList from "../components/MovieList";
import { movies } from "../services/MoviesService.js";

export default {
  components: {
    MovieList
  },
  data() {
    return {
      movies: []
    };
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
