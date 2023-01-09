import React, { useState } from "react";

export const OfertasContext = React.createContext({});

export const OfertasProvider = (props) => {
  const [ofertas, setOfertas] = useState([]);
  const [foto, setFoto] = useState("");


  return (
    <OfertasContext.Provider value={{ ofertas, setOfertas, foto, setFoto }}>
      {props.children}
    </OfertasContext.Provider>
  );
};

export const useOfertas = () => React.useContext(OfertasContext);
