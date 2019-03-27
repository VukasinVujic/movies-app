<template>
  <div>
    <input class="form-control" placeholder="find a movie" v-model="searchTerm" type="text">
    <button @click="filteredMovies">filter</button>
  </div>
</template>

<script>
export default {
  name: "MoviSearch",

  data() {
    return {
      searchTerm: ""
    };
  },

  methods: {
    filteredMovies() {
      this.$emit("filterMovie", this.searchTerm);
    }
  }
};
</script>

