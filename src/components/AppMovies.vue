<template>
  <div>
    <movie-row :movies="movies"></movie-row>
  </div>
</template>

<script>
import { movies } from "../services/MoviesService.js";
import MovieRow from "../components/MovieRow";

export default {
  components: {
    MovieRow
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
