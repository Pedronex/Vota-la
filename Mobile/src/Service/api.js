import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.237.2.207:3000",
});
