<template>
  <div class="row">
    <div class="card col-md-2" v-for="movie in movies" :key="movie.id">
      <div class="card-body">
        <h5 class="card-title">Title {{ movie.title }}</h5>
        <p class="card-text">Director: {{ movie.director }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">imageUrl: {{ movie.imageUrl }}</li>
        <li class="list-group-item">duration: {{ movie.duration }}</li>
        <li class="list-group-item">releaseDate: {{ movie.releaseDate }}</li>
        <li class="list-group-item">genre: {{ movie.genre}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      movies:Array
  }
};
</script>

<style>
</style>
