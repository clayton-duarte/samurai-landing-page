import React, { FunctionComponent } from "react";
import { css, Global, Theme, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const theme: Theme = {
    black: "#303841",
    grey: "#7f7f7f",
    white: "#EEEEEE",
    green: "#00BFA5",
    blue: "#1364CD",
    red: "#E03E3E",
    shadow: "0 0 1rem #0003",
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&display=swap");
          * {
            box-sizing: border-box;
          }
          body,
          html {
            font-family: "Roboto", sans-serif;
            background: ${theme.white};
            color: ${theme.black};
            font-size: 16px;
            margin: 0;
          }
          button,
          [role="button"] {
            cursor: pointer;
            outline: none;
          }
          p,
          span {
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
    </ThemeProvider>
  );
};

export default App;
