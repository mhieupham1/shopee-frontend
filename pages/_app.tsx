import type { AppProps } from 'next/app';
import ShopeeLayout from '../components/layouts/ShopeeLayout'
import FacebookLayout from '../components/layouts/FacebookLayout'
import '@styles/main.scss'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const cache = createCache();
  const styleText = extractStyle(cache);
  const router = useRouter();

  const Layout = router.asPath === '/content-facebook' ? FacebookLayout : ShopeeLayout;

  return (
      <StyleProvider cache={cache}>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </StyleProvider>
  )
}