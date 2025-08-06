import { Metadata, Viewport } from 'next'

import '../public/static/app.css'
import 'react-typist/dist/Typist.css'

import ClientComponents from './ClientComponents';
import { GA_TRACKING_ID } from "../lib/gtag";

export const metadata: Metadata = {
  title: 'Shigetaka Shirouchi',
  description: "I'm a Front-End Engineer.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Shigetaka Shirouchi',
    type: 'website',
    url: 'https://shgtkshruch.com',
    images: 'https://shgtkshruch.com/ogp.png',
    description: "I'm a Front-End Engineer.",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shgtkshruch',
    title: 'Shigetaka Shirouchi',
    description: "I'm a Front-End Engineer.",
    images: 'https://shgtkshruch.com/ogp.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Inconsolata"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/f5bfd049f6.js"
          crossOrigin="anonymous"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `,
          }}
        />
      </head>
      <body>
        <ClientComponents />
        {children}
      </body>
    </html>
  )
}