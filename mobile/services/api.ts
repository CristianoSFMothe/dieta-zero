
import axios from "axios";

// http://192.168.0.12:3333 /create
export const api = axios.create({
  baseURL: "http://10.0.0.40:3333"
})