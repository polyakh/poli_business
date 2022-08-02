//region Global Imports
import type { AppProps } from "next/app";
//endregion

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
