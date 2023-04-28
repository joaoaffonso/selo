// pages/_app.tsx

import '../styles/estilos.css'; // Importe o arquivo de estilos globais aqui
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}