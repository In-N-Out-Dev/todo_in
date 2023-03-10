import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import type {AppProps} from 'next/app';
import {useState} from 'react';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {GlobalStyle} from '@/styles';
import {Layout} from '@/components';
import {RecoilRoot} from 'recoil';

export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
