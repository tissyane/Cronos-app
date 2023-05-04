import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

const theme: DefaultTheme = {
  colors: {
    background: "#050505",
    white: "#FFFFFF"
  },
};

const myFont = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const helvetica = localFont({
  src: "../assets/fonts/HelveticaNeueCyr-Heavy.woff2",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}