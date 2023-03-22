import type { AppProps } from 'next/app';
import Head from 'next/head';

import React from 'react';

import { DeviceTypeContextProvider } from '../context/DeviceTypeContext';
import { AppStateContextProvider } from '../context/AppStateContext';

import LayoutPage from '../components/layout/Layout';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <DeviceTypeContextProvider>
         <AppStateContextProvider>
            <LayoutPage>
               <Head>
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
               </Head>
               <Component {...pageProps} />
            </LayoutPage>
         </AppStateContextProvider>
      </DeviceTypeContextProvider>
   );
}
