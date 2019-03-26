<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
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
