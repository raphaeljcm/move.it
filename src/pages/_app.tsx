import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';

import 'react-toastify/dist/ReactToastify.css';
import { UsersProvider } from '../contexts/UsersContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UsersProvider>
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer />
      </UsersProvider>
    </ThemeProvider>
  );
}

export default MyApp;
