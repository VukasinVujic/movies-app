import axios from "axios";

export default class MoviesServices {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3000/api/";
  }
}
