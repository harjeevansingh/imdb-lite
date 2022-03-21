import axios from "axios";

export default axios.create({
  // will the axios function be exported or the output of the execution of create function
  baseURL: "https://www.omdbapi.com",
});
