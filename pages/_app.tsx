import { cloneElement } from "react";
import type { AppProps } from "next/app";
import { globalCss } from "@stitches/react";
import { sand } from "@radix-ui/colors";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const globalStyles = globalCss({
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    background: sand.sand1,
    color: sand.sand12,
  },

  "*": {
    boxSizing: "border-box",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        {cloneElement(<Component {...pageProps} />, { key: router.pathname })}
      </AnimatePresence>
    </Layout>
  );
}
