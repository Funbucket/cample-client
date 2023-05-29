import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { AppLayout } from '~/layouts'
import { GlobalCSS, emotionTheme, chakraTheme } from '~/styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={chakraTheme}>
      <ThemeProvider theme={emotionTheme}>
        <GlobalCSS />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </ChakraProvider>
  )
}
