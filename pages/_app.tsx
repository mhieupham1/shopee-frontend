import type { AppProps } from 'next/app';
import Layout from '../components/layout'
import '@styles/main.scss'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function App({ Component, pageProps }: AppProps) {
    const cache = createCache();
    const styleText = extractStyle(cache);

    return (
        <StyleProvider cache={cache}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyleProvider>
    )
}