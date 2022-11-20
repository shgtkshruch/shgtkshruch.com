import { AppProps } from 'next/app'

import '../public/static/app.css'
import 'react-typist/dist/Typist.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-toward-subtle.css'
import 'tippy.js/themes/material.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
