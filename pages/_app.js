import GlobalStyles from "../styles/globals";
import jover from "../jover";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import defaultLayout from "../jover";
import dynamic from "next/dynamic";
const HeaderMicro = dynamic(() => import("header/header"), { ssr: false });

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const history = useRouter();
  const filterAppLogged = history.asPath.includes("/pharmacy");
  const filterLoginPage = history.asPath.includes("/login");

  return (
    <>
      <NextNProgress
        color={jover[0]["default-contrast-color"]}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <ToastContainer />
      {!filterLoginPage && filterAppLogged && (
        <HeaderMicro nameRoute="pharmacy" />
      )}
      <GlobalStyles colors={defaultLayout} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
