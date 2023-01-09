import React, { useState, useEffect } from "react";

export const LocationContext = React.createContext({});

export function LocationProvider(props) {
  const [localizacao, setLocal] = useState({
    city: "",
    complement: "",
    ibge: "",
    neighborhood: "",
    state: "",
    street: "",
    postcode: "",
  });

  const [localizado, setLocalizado] = useState(false);
  const [AtualizarModalPagina, setAtualizarModalPagina] = useState(false);

  const [modal, setModal] = useState(false);

  function setLocalizacao(objeto) {
    if (
      localStorage.getItem(`${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`)
    ) {
      const local = JSON.parse(
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
        )
      );

      if (local.zipcode === undefined) {
        setLocal(local);
      } else {
        setLocal({
          address: local.address,
          city: local.city,
          country: local.country,
          neighborhood: local.neighborhood,
          state: local.state,
          postcode: local?.zipcode ? local?.zipcode : local.postcode,
        });
      }
    } else {
      const local = objeto;

      if (local.zipcode === undefined) {
        localStorage.setItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`,
          JSON.stringify(objeto)
        );
        setLocal(objeto);
      } else {
        const newLocal = {
          address: local.address,
          city: local.city,
          country: local.country,
          neighborhood: local.neighborhood,
          state: local.state,
          postcode: local?.zipcode ? local?.zipcode : local.postcode,
        };
        localStorage.setItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`,
          JSON.stringify(newLocal)
        );
        setLocal(newLocal);
      }
    }
    setLocalizado(true);
  }

  function removeLocation() {
    localStorage.removeItem(
      `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
    );
    setLocal({
      city: "",
      complement: "",
      ibge: "",
      neighborhood: "",
      state: "",
      street: "",
      postcode: "null",
    });

    setLocalizado(false);
    // setModal(false);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
        )
      ) {
        const local = JSON.parse(
          localStorage.getItem(
            `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_location`
          )
        );

        if (local.zipcode === undefined) {
          setLocal(local);
        } else {
          setLocal({
            address: local.address,
            city: local.city,
            country: local.country,
            neighborhood: local.neighborhood,
            state: local.state,
            postcode: local?.zipcode ? local?.zipcode : local.postcode,
          });
        }

        setLocalizado(true);
      } else {
        setLocal({
          address: "",
          city: "",
          country: "",
          neighborhood: "",
          state: "",
          postcode: "null",
        });
      }
    }
  }, []);

  return (
    <LocationContext.Provider
      value={{
        localizacao,
        setLocalizacao,
        localizado,
        setLocalizado,
        modal,
        setModal,
        removeLocation,
        AtualizarModalPagina,
        setAtualizarModalPagina,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return React.useContext(LocationContext);
}
