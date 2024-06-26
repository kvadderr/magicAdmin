import Head from 'next/head';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import * as React from 'react';
import { NextPage } from 'next';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'server/client';
import AdminLayout from 'layouts/Admin';
import '../assets/css/App.css';

import '@paljs/admin/style.css';

import { useRouter } from 'next/router';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const router = useRouter();
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const admin = router.pathname.startsWith('/admin');
  const Query_Client = new QueryClient();
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <QueryClientProvider client={Query_Client}>
        <ApolloProvider client={apolloClient}>
          {admin ? (
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ApolloProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
