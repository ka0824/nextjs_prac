import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>이 문구는 모든 페이지에서 보이게 됩니다.</div>
      <Component {...pageProps} />
    </div>
  );
}
