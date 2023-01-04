import axios from "axios";
import { getToken } from "./auth";
import notification from "./notification";

const url = process.env.NEXT_PUBLIC_REACT_APP_PLATAZ_URL;

const api = axios.create({
  baseURL: /* proxyurl + */ url,
  timeout: 100000,
});

api.interceptors.response.use(
  (response) => {
    // response data

    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          if (
            error.response.data.message === "O campo CEP deve ter 8 dígitos."
          ) {
          } else {
            notification(error.response.data.message, "error");
          }

          break;

        case 401:
          window.localStorage.removeItem(
            process.env.NEXT_PUBLIC_REACT_APP_NAME
          );

          window.localStorage.removeItem(
            `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_username`
          );

          if (
            error.response.data.error === "Seu e-mail ou senha estão errados"
          ) {
            notification(error.response.data.error, "error");
            break;
          }

          if (
            error.response.data.error === "Unauthenticated" ||
            error.response.data.error === "Não autenticado"
          ) {
            if (!sessionStorage.getItem("urlantiga")) {
              notification(
                "Para prosseguir, você precisa estar logado.",
                "error"
              );
              sessionStorage.setItem("urlantiga", window.location.href);
              setTimeout(function () {
                window.location.href = "/login";
              }, 3000);
            }
          } else if (!statusUser) {
            notification(error.response.data.error, "error");

            window.location.href = "/login";
          } else {
            window.location.href = "/";
          }

          break;

        case 408:
          notification(error.response.data.message, "error");

          window.localStorage.removeItem(
            process.env.NEXT_PUBLIC_REACT_APP_NAME
          );

          window.localStorage.removeItem(
            `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_username`
          );

          window.location.href = "/login";

          break;

        case 500:
          notification(error.response.data.message, "error");

          break;

        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
