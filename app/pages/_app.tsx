import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {
        secondary: "#3A3A3A",
        gradient: "linear-gradient(102.16deg, #66FE89 0%, #52D770 100%)",
        white: "#FFF",
        black: "#000",

        primary: "#66FE89",
        primaryBorder: "#66FE89",
        primaryHover: "#52D770",
        primaryLight: "#C2FFD0",
        primaryLightHover: "#A3FEB8", // commonly used on hover state
        primaryLightActive: "#85FEA1", // commonly used on pressed state
        primaryLightContrast: "#52D770", // commonly used for text inside the component
        primaryBorderHover: "#52D770",
        primarySolidHover: "#3DB058",
        primarySolidContrast: "#1C1C1C", // commonly used for text inside the component
        primaryShadow: "#66FE89",
        accents9: "#1c1c1c",

        link: "#fff",
      },
      fonts: {
        sans: "'Open Sans', sans-serif",
        heading: "'Poppins', sans-serif",
      },
    },
  });

  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
