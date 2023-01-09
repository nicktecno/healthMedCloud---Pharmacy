import "react-toastify/dist/ReactToastify.min.css";

import FooterComponent from "./Footer";
import { useCart } from "../../Context/CartLengthContext";
import { useMenu } from "../../Context/Menu";
import { useColorTheme } from "../../Context/ColorTheme";
import { useLang } from "../../Context/LangContext";

const Footer = () => {
  const { openMenu, setOpenMenu } = useMenu();
  const { lang, generalComponentsTranslation, setLang } = useLang();
  const { colorThemes, chooseMktOption, selectedMkt, PostColorThemes } =
    useColorTheme();
  const { cartLength } = useCart();

  return (
    <FooterComponent
      cartLength={cartLength}
      openMenu={openMenu}
      setOpenMenu={setOpenMenu}
      colorThemes={colorThemes}
      chooseMktOption={chooseMktOption}
      selectedMkt={selectedMkt}
      PostColorThemes={PostColorThemes}
      generalComponentsTranslation={generalComponentsTranslation}
      lang={lang}
      setLang={setLang}
    />
  );
};

export default Footer;
