import GlobalStyles from "../styles/globals";
import { defaultLayout } from "../jover.json";

import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <GlobalStyles
        colors={
          process.env.NEXT_PUBLIC_REACT_APP_MMP_STATE === "true"
            ? selectedMkt
            : defaultLayout
        }
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
