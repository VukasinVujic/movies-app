import axios from "axios";

export default class MoviesServices {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3000/api/";
  }
  getAll(term = "") {
    return axios.get("movies", {
      params: {
        term
      }
    });
  }
}

export const movies = new MoviesServices();
