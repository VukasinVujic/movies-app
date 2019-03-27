<template>
  <div class="row" :class="{'colorSelectedMovie' :selected}">
    <div class="col-sm">Id: {{ movie.id }}</div>
    <div class="col-sm">Title: {{ movie.title }}</div>
    <div class="col-sm">Director: {{ movie.director }}</div>
    <div class="col-sm">image: {{ movie.imageUrl }}</div>
    <div class="col-sm">duration: {{ movie.duration }}</div>
    <div class="col-sm">release date: {{ movie.releaseDate }}</div>
    <div class="col-sm">genre: {{ movie.genre }}</div>
    <div class="col-sm">
    
    <button type="submit" @click="OnSelect"> SElect </button>
    
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      selected: false
    }
  },
  methods: {
    OnSelect(){
      this.selected = true;
      this.$emit('SelectAMovie', this.movie)
    }
  }
};
</script>


<style>

.colorSelectedMovie {
  background: rgb(100,100,200)
}

</style>
