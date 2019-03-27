<template>
  <div>
    <movie-search @filterMovie="searchTermMovie"></movie-search>
    <div> Number of selected movies: {{numberOfSelecteMovies}} </div>
    <ul v-for="movie in movies" :key="movie.id">
      <li>
        <movie-row :movie="movie" @SelectAMovie="selectedMovie" > </movie-row >
      </li>
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
      searchTerm: '',
      arraySelectedMovies: [],
    };
  },
  methods: {
    searchTermMovie(term) {
      this.movies = this.movies.filter((movie) => {
        let formatedString = term.toLowerCase()
          return movie.title.toLowerCase().includes(formatedString);
      })
    },
    selectedMovie(movie){
      if(this.arraySelectedMovies.indexOf(movie.id) > -1) {
        return;
      }
      this.arraySelectedMovies.push(movie.id)
    }
  },

  computed:{
    numberOfSelecteMovies(){
      return this.arraySelectedMovies.length;
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
