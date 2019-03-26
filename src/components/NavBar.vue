<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{name:'movies'}" class="navbar-brand">Movies</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
</style>
