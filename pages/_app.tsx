import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";
import { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&display=swap");
        body,
        html {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          margin: 0;
        }
        p {
          font-family: "Roboto", sans-serif;
          line-height: 1.2;
          margin: 0;
        }
        h1,
        h3,
        h5 {
          font-family: "Roboto Mono", monospace;
          font-weight: bold;
          line-height: 1.5;
          margin: 0;
        }
        h2,
        h4,
        h6 {
          font-family: "Roboto", sans-serif;
          font-weight: bold;
          line-height: 1.5;
          margin: 0;
        }
      `}
    />
  </>
);

export default App;
