import axios from "axios";
import notification from "./notification";

const url = "https://location.cazco.tech/api";

const msLocation = axios.create({
  baseURL: url,
  timeout: 100000,
});

msLocation.interceptors.response.use(
  (response) => {
    // response data

    return response;
  },
  function (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          notification(error.response.data.message, "error");

          break;

        case 500:
          notification(
            "Não foi possivel encontrar seu endereço, tente outro CEP",
            "error"
          );

          break;

        default:
          break;
      }
    }

    return Promise.reject(error);
  }
);

export default msLocation;
