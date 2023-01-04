import axios from "axios";

const url = process.env.NEXT_PUBLIC_REACT_APP_PLATAZ_URL;

const apiUnlogged = axios.create({
  baseURL: /* proxyurl + */ url,
  timeout: 100000,
});

export default apiUnlogged;
