import '../styles/globals.scss'
import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

const customTheme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    fontFamily: 'Objectivity,Roboto,Helvetica,Arial,sans-serif',
  }
});

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps,
) => {
  // const apolloClient = useApollo(props.pageProps.initialApolloState);
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (

    <ThemeProvider theme={customTheme}>
      {/* <ApolloProvider client={apolloClient}> */}
      {getLayout(
        <>
          <Head>
            <title>JAZ</title>
            <meta
              name='viewport'
              content='width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover'
            />
          </Head>
          <CssBaseline />
          <NextNProgress />
          <Component {...pageProps} />
        </>,
      )}
      {/* </ApolloProvider> */}
    </ThemeProvider>
  );
};

export default MyApp
