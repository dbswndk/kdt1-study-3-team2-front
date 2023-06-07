import axios from "axios";

import env from "@/env";

const axiosInst = axios.create({
  baseURL: env.api.MAIN_API_URL,
  // baseURL: "http://localhost:7777",
  timeout: 2500,
});
export default axiosInst;

