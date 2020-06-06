import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'

import '../public/static/app.css'
import 'react-typist/dist/Typist.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-toward-subtle.css'
import 'tippy.js/themes/material.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return <Component {...pageProps} />
}
