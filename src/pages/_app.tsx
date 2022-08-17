//region Global Imports
import type { AppProps } from "next/app";
//endregion

//region Local Imports
import "./globals.css";
import { NextPageWithLayout } from "./page";
//endregion

interface AppOwnProps extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppOwnProps) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
