import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <title>StreetLight</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha384-PPIZEGYM1v8zp5Py7UjFb79S58UeqCL9pYVnVPURKEqvioPROaVAJKKLzvH2rDnI"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="module"
          src="https://assets.freshgenie.com/status/embeds/badges/index.js"
        ></script>
        <script
          type="module"
          src="https://assets.freshgenie.com/status/embeds/widgets/index.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
