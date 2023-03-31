import GlobalStyles from "../styles/globals";

import { ToastContainer } from "react-toastify";
import defaultLayout from "../jover";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <GlobalStyles colors={defaultLayout} />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
