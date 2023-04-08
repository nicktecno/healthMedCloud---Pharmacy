import GlobalStyles from "../styles/globals";
import jover from "../jover";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import defaultLayout from "../jover";
import Header from "../PagesComponents/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color={jover[0]["default-contrast-color"]}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Header />
      <ToastContainer />
      <GlobalStyles colors={defaultLayout} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
