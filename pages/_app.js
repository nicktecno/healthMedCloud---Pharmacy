import GlobalStyles from "../styles/globals";
import { defaultLayout } from "../jover.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
