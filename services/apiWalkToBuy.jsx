import axios from "axios";
import { getToken } from "./auth";
import notification from "./notification";

const url = process.env.NEXT_PUBLIC_REACT_APP_WALK_TO_BUY;

const apiWalkToBuy = axios.create({
  baseURL: /* proxyurl + */ url,
  timeout: 100000,
});

apiWalkToBuy.interceptors.response.use(
  (response) => {
    // response data

    return response;
  },
  function (error) {
    // response error

    switch (error.response.status) {
      case 400:
        notification(error.response.data.message, "error");

        break;

      case 401:
        notification(error.response.data.error, "error");

        window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);

        window.location.href = "/login";

        break;

      case 408:
        notification(error.response.data.message, "error");

        window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);

        window.location.href = "/login";

        break;

      case 500:
        notification(error.response.status, "error");

        window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);

        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

apiWalkToBuy.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apiWalkToBuy;
