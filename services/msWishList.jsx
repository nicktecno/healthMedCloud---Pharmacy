import axios from "axios";

import { getToken } from "./auth";

const url = process.env.NEXT_PUBLIC_REACT_APP_MS_WISHLIST;

const wishListApi = axios.create({
  baseURL: url,
  timeout: 100000,
});

wishListApi.interceptors.response.use((response) => {
  // response data

  return response;
});

wishListApi.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }

  return config;
});

export default wishListApi;
