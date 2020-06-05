import { AppProps } from 'next/app'

import "../static/index.css";
import "react-typist/dist/Typist.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}