import React, { useState } from "react";

export const MenuContext = React.createContext({});

export const MenuProvider = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openWishList, setOpenWishList] = useState("inativo");
  const [show, setShow] = useState(false);
  const [menuState, setMenuState] = useState(false);
  return (
    <MenuContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openWishList,
        setOpenWishList,
        show,
        setShow,
        menuState,
        setMenuState,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => React.useContext(MenuContext);
