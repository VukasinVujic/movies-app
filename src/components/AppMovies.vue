<template>
  <div>
    <movie-search @filterMovie="searchTermMovie"></movie-search>
    <ul>
      <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
    
    <div v-if="!movies.length">No movies BRE with such a title  </div>
      
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
      movies: [],
      searchTerm: ''
    };
  },
  methods: {
    searchTermMovie(term) {
      this.movies = this.movies.filter((movie) => {
        let formatedString = term.toLowerCase()
          return movie.title.toLowerCase().includes(formatedString);

      })
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
