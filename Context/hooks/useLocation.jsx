import { useState } from "react";
import { getLocation } from "../../services/geolocation";
import api from "../../services/api";

export default function useLocation() {
  const [location, setLocation] = useState([]);
  const [openModal, setOpenModal] = useState("oculto");

  function handleLocation() {
    getLocation(setLocation);
    setOpenModal(openModal === "abre" ? "oculto" : "abre");
    currentLocation(location);
  }

  function openModalInter() {
    setOpenModal(openModal === "abre" ? "oculto" : "abre");
  }

  function removeLocation() {
    localStorage.removeItem(
      `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
    );
    setLocation("");
  }

  async function handleGetLocation(cep, nao = true) {
    const dataCep = {
      zipcode: cep.replace("-", ""),
    };
    try {
      const { data: response } = await api.post("/search-cep", dataCep);
      if (response.data) {
        localStorage.setItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`,
          JSON.stringify(response.data)
        );
      }
      setLocation(response.data);

      if (nao) {
        setOpenModal(openModal === "abre" ? "oculto" : "abre");
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  }

  function currentLocation(location) {
    return localStorage.getItem(
      `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
    )
      ? JSON.parse(
          localStorage.getItem(
            `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
          )
        )
      : location;
  }

  return {
    currentLocation,
    handleLocation,
    location,
    removeLocation,
    openModalInter,
    handleGetLocation,
    openModal,
  };
}
