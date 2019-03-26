import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import AppMovies from "./components/AppMovies.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/movies" },
  { path: "/movies", component: AppMovies, name: "movies" }
];

export const router = new VueRouter({
  mode: "history",
  routes
});
