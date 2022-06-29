import type { AppProps } from 'next/app';
import { Layout } from '/src/components/';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createGlobalStyle } from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import item from '/src/redux/item';

const queryClient = new QueryClient();

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', 'Arial', sans-serif;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const store = createStore(item);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <Layout>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
