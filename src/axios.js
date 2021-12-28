import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://renovation-lab-web-server.herokuapp.com/",
});

export default instance;
