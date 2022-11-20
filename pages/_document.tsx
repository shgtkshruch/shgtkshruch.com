import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="I'm a Front-End Engineer." />
          <meta name="description" content="I'm a Front-End Engineer." />
          <meta property="og:title" content="Shigetaka Shirouchi" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shgtkshruch.com" />
          <meta property="og:image" content="https://shgtkshruch.com/ogp.png" />
          <meta property="og:description" content="I'm a Front-End Engineer." />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@shgtkshruch" />
          <meta name="twitter:title" content="Shigetaka Shirouchi" />
          <meta
            name="twitter:description"
            content="I'm a Front-End Engineer."
          />
          <meta
            name="twitter:image"
            content="https://shgtkshruch.com/ogp.png"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic|Inconsolata"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/f5bfd049f6.js"
            crossOrigin="anonymous"
          ></script>
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
