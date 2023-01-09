import React, { useState } from "react";

export const WalkToBuyContext = React.createContext({});

export const WalkToBuyProvider = (props) => {
  const [walkData, setWalkData] = useState({
    shower: "",
    flow_rate: "",
    city_id: "",
    gas: "gas"
  });

  const [modalWalk, setModalWalk] = useState(false);
  const [oculto, setOculto] = useState(false);
  const [flow, setFlow] = useState(0);
  const [etapa, setEtapa] = useState(1);

  return (
    <WalkToBuyContext.Provider value={{ walkData, setWalkData, modalWalk, setModalWalk, oculto, setOculto, flow, setFlow, etapa, setEtapa }}>
      {props.children}
    </WalkToBuyContext.Provider>
  );
};

export const useWalkToBuy = () => React.useContext(WalkToBuyContext);
