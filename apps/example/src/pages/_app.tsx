import "test-tailwind/dist/index.css"
import type { AppProps } from "next/app"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import {
  DefaultTheme,
  ThemeProvider as SCThemeProvider,
} from "styled-components"
import { eRenaTheme, foundations } from "test-tailwind"

const theme: DefaultTheme = {
  brand: {
    ...eRenaTheme.Light,
  },
  foundations: {
    ...foundations.light,
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemeProvider
        defaultTheme="erena-light"
        themes={[
          "erena-light",
          "erena-dark",
          "sidekick-light",
          "sidekick-dark",
        ]}
      >
        <SCThemeProvider theme={theme}>
          <Component {...pageProps} />
        </SCThemeProvider>
      </NextThemeProvider>
    </>
  )
}
