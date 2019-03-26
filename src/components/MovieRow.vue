<template>
  <div class="row">
    <div v-text="movie.id"></div>
    <div v-text="movie.title"></div>
    <div v-text="movie.director"></div>
    <div v-text="movie.genre"></div>
    <div v-text="movie.relaseDate"></div>
    <div v-text="movie.duration"></div>
    <br>
    <br>

    <!-- <div class="card col-md-2" v-for="movie in movies" :key="movie.id"> -->
    <!-- <div class="card-body">
        <h5 class="card-title">Title {{ movie.title }}</h5>
        <p class="card-text">Director: {{ movie.director }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">imageUrl: {{ movie.imageUrl }}</li>
        <li class="list-group-item">duration: {{ movie.duration }}</li>
        <li class="list-group-item">releaseDate: {{ movie.releaseDate }}</li>
        <li class="list-group-item">genre: {{ movie.genre}}</li>
    </ul>-->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
