import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import api from "../services/api";
import { saveToken, saveUserData } from "../services/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState();

  const cookieUserData = Cookies.get("userData");

  const [userData, setUserData] = useState();

  const token = Cookies.get(process.env.NEXT_PUBLIC_REACT_APP_NAME);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (cookieUserData) {
        setUserData(JSON.parse(cookieUserData));
      } else {
        setUserData(false);
      }
    }
  }, [cookieUserData]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (token) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    }
  }, [token]);

  /**
   *
   * @param {Object} fields fields to login (email, password)
   * @param {Text} redirect path to redirect after login
   * @param {Bolean} cart If true, get cart in sessionStorage and send to API
   */

  const loginService = useCallback(async (fields, redirect) => {
    try {
      const response = await api.post("/customer/login", fields);

      saveToken(response.data.token);

      setAuthenticated(true);

      getUserData();

      if (redirect) {
        router.push(redirect);
      }
    } finally {
      return false;
    }
  }, []);

  async function getUserData() {
    try {
      const { data: response } = await api.get("/customer/get");

      saveUserData(response);

      setUserData(response);
    } finally {
    }
  }

  const Logout = async (redirect) => {
    try {
      await api.get("/customer/logout");

      Cookies.remove(process.env.NEXT_PUBLIC_REACT_APP_NAME);
      Cookies.remove("userData");

      setAuthenticated(false);

      return redirect && router.push("/login");
    } finally {
    }
  };

  const value = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
      Logout,
      loginService,
      userData,
    }),
    [authenticated, loginService, userData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
