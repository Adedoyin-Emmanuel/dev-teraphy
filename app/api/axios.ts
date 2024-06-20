import axios from "axios";

export const API_BASE_URL = "http://localhost:2800/api";

export const Axios = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});
