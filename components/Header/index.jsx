import "react-toastify/dist/ReactToastify.min.css";
import HeaderComponent from "./Header";
import { useCart } from "../../Context/CartLengthContext";
import { useMenu } from "../../Context/Menu";
import { useLang } from "../../Context/LangContext";
import { useLocation } from "../../Context/Location";

const Header = () => {
  const { openMenu, setOpenMenu, setMenuState, menuState } = useMenu();
  const { lang, generalComponentsTranslation, setLang } = useLang();
  const {
    localizacao,
    localizado,
    modal,
    setModal,
    setLocalizacao,
    setLocalizado,
    removeLocation,
    AtualizarModalPagina,
    setAtualizarModalPagina,
  } = useLocation();
  const { cartLength, setCartLength } = useCart();
  return (
    <HeaderComponent
      cartLength={cartLength}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      generalComponentsTranslation={generalComponentsTranslation}
      lang={lang}
      setLang={setLang}
      localizacao={localizacao}
      localizado={localizado}
      modal={modal}
      setModal={setModal}
      setLocalizacao={setLocalizacao}
      setLocalizado={setLocalizado}
      removeLocation={removeLocation}
      AtualizarModalPagina={AtualizarModalPagina}
      setAtualizarModalPagina={setAtualizarModalPagina}
      setCartLength={setCartLength}
      setMenuState={setMenuState}
      menuState={menuState}
    />
  );
};

export default Header;
