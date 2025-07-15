import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.DEV
    ? "http://localhost:4200/api"
    : import.meta.env.PROD_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
