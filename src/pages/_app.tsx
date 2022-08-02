import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='container'>
        <Component {...pageProps} />
        <GlobalStyle /> 
      </div>
    </ThemeProvider>
  )
}

export default MyApp
