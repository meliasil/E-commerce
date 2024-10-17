import type { AppProps } from "next/app";
/* import "../styles/globals.module.scss"; */

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
