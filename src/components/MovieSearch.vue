<template>
  <div>
    <input
      class="form-control"
      placeholder="Search"
      v-model="search"
      type="text"
      @input="searchTermUpdated"
    >
  </div>
</template>

<script>
export default {
  name: "MoviSearch",

  methods: {
    searchTermUpdated(term) {
      this.$emit("search-term-change", term);
    }
  }
};
</script>

<style>
</style>
