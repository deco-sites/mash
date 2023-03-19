import { asset, Head } from "$fresh/runtime.ts";

function GlobalTags() {
  return (
    <Head>
      {/* Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={asset("/favicon.png")}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={asset("/favicon.png")}
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={asset("/favicon.png")}
      />
      <title>Mash</title>

      {/* Web Manifest */}
      <link rel="manifest" href={asset("/site.webmanifest")} />
      <meta name="theme-color" content="#221E1F" />
      <meta name="msapplication-TileColor" content="#221E1F" />


      {
        /*
         * Include fonts
         * tip: It's always better copy fonts to the `/static/fonts` folder than serving from another
         * domain since DNS resolution times can really affect performance.
         */
      }
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* latin-ext */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZVYFeQGQyUV3U.woff2")
          }) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          /* latin */
          @font-face {
            font-family: 'Albert Sans';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/i7dOIFdwYjGaAMFtZd_QA1ZbYFeQGQyU.woff2")
          }) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Thin.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-ExtraLight.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Light.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Regular.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Medium.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-SemiBold.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Bold.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-ExtraBold.woff2")
          }) format('woff2');
          }
          /* montserrat */
          @font-face {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
            asset("/fonts/Montserrat-Black.woff2")
          }) format('woff2');
          }
          #summary-details[open] summary::after {
            content: "-";
          }

          #summary-menu::marker {
            content: "";
          }

          #summary-menu:after {
            content: "+";
          }

          #gender_radio:checked, #newsletter-concordo:checked, #checkbox-filter:checked {
            background-color: #000;
            background-image: url(${asset("/checkbox.png")});
            background-repeat: no-repeat;
            background-position: center;
          }

          #sort:hover #MenuOrdenar {
            fill: #FFFFFF
          }

          #provador {
            background-image: url(https://szb-tenants-production.s3.amazonaws.com/1777/provvirtual.svg);
            width: 20px;
            background-position: center;
            background-repeat: no-repeat;
            margin-right: 10px;
          }

          #medidor {
            background-image: url(https://szb-tenants-production.s3.amazonaws.com/1777/tabmedidas.svg);
            width: 20px;
            background-position: center;
            background-repeat: no-repeat;
            margin-right: 10px;
          }
          .trustvox-widget-rating .ts-shelf-container,
          .trustvox-widget-rating .trustvox-shelf-container {display: inline-block;}
          .trustvox-widget-rating span.rating-click-here {
              top: -3px;
              display: inline-block;
              position: relative;
              color: #DAA81D;
              font-size: 12px;
          }
          .trustvox-widget-rating:hover span.rating-click-here {text-decoration: underline;}
      `,
        }}
      />
    </Head>
  );
}

export default GlobalTags;
