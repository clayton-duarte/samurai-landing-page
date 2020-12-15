import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";
import { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Global
      styles={css`
        body,
        html {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 16px;
          margin: 0;
        }
      `}
    />
  </>
);

export default App;
