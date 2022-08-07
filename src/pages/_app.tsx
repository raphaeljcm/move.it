import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { GlobalStyle } from '../styles/global';
import { defaultTheme } from '../styles/themes/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ChallengesProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export default MyApp;
