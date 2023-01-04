import api from "../services/api";

export const isAuthenticated = () =>
  window.localStorage.getItem(process.env.NEXT_PUBLIC_REACT_APP_NAME) !== null;
export const getToken = () =>
  window.localStorage.getItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);
export const saveToken = (token) => {
  window.localStorage.setItem(process.env.NEXT_PUBLIC_REACT_APP_NAME, token);
};

export const clearToken = () => {
  window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);
};

export const Logout = async (redirect) => {
  await api.get("/customer/logout");

  window.localStorage.removeItem(
    `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_username`
  );

  window.localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);
  window.location.href = "/login";

  return redirect;
};

export const saveUserData = (data) => {
  // eslint-disable-next-line no-unused-vars
  const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
};
