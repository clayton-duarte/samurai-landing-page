import React, { FunctionComponent } from 'react'
import { css, Global, Theme, ThemeProvider } from '@emotion/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const theme: Theme = {
    black: '#222831',
    grey: '#7f7f7f',
    white: '#e8e8e8',
    green: '#25D366',
    blue: '#4267B2',
    red: '#E60023',
    shadow: '0 0 1rem #0003',
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dilson Samurai - Karatê Budo</title>
      </Head>
      <Component {...pageProps} />
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Roboto:wght@400;700&display=swap');
          * {
            box-sizing: border-box;
          }
          body,
          html {
            font-family: 'Roboto', sans-serif;
            background: ${theme.white};
            color: ${theme.black};
            font-size: 16px;
            margin: 0;
          }
          button,
          [role='button'] {
            cursor: pointer;
            outline: none;
          }
          p,
          span,
          input,
          textarea {
            font-family: 'Roboto', sans-serif;
            line-height: 1.2;
            font-size: 1rem;
            color: inherit;
            margin: 0;
          }
          h1,
          h3,
          h5 {
            font-family: 'Roboto Mono', monospace;
            font-weight: bold;
            line-height: 1.5;
            color: inherit;
            margin: 0;
          }
          h2,
          h4,
          h6 {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            line-height: 1.5;
            color: inherit;
            margin: 0;
          }
        `}
      />
    </ThemeProvider>
  )
}

export default App
