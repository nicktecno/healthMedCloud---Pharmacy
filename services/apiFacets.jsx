import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_REACT_ALGOLIA_FACETS}/api`;

const apiFacets = axios.create({
  baseURL: /* proxyurl + */ url,
  timeout: 100000,
});

export default apiFacets;
