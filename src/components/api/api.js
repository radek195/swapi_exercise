import axios from "axios";

export default axios.create({
  baseURL: "http://swapi.dev/api/planets",
});
