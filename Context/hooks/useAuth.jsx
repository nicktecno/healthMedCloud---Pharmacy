import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import api from "../../services/api";
import { useCart } from "../CartLengthContext";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setCartLength } = useCart();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem(
        process.env.NEXT_PUBLIC_REACT_APP_NAME
      );

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
      }

      setLoading(false);
    }
  }, []);

  function validaLogin() {
    setAuthenticated(true);
  }

  async function handleLogin() {
    const {
      Authorization: { token },
    } = await api.post("/customer/authenticated");

    localStorage.setItem(process.env.NEXT_PUBLIC_REACT_APP_NAME, token);

    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    window.location.href = "/users";
    router.push("/users");
  }

  function handleLogout() {
    setCartLength("0");
    setAuthenticated(false);
    localStorage.removeItem(process.env.NEXT_PUBLIC_REACT_APP_NAME);
    api.defaults.headers.Authorization = undefined;

    router.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout, validaLogin };
}
