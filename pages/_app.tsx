import Head from 'next/head';
import '../styles/globals.css';
import '../styles/custom-classes.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

import Layout from '../layouts/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        import('preline');
    }, []);

    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
                />
                <meta
                    name='description'
                    content='Thiền Anapanasati, Thiền Quán hơi thở'
                />
                <meta
                    name='keywords'
                    content='anapanasati, thien, breathing, zen, meditation'
                />
                <title>Anapanasati Meditation</title>
                
                <link
                    href='/favicon.png'
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                />
                <link rel='apple-touch-icon' href='/apple-icon.png'></link>
                <meta name='theme-color' content='#317EFB' />

                <meta name='application-name' content='Anapanasati Meditation' />
                <meta
                    name='apple-mobile-web-app-status-bar-style'
                    content='default'
                />
                <meta name='apple-mobile-web-app-title' content='Anapanasati Meditation' />
                <meta name='description' content='Best Anapanasati Meditation' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta
                    name='msapplication-config'
                    content='/icons/browserconfig.xml'
                />
                <meta name='msapplication-TileColor' content='#2B5797' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />

                <link
                    rel='apple-touch-icon'
                    href='/icons/touch-icon-iphone.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='152x152'
                    href='/icons/touch-icon-ipad.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/icons/touch-icon-iphone-retina.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='167x167'
                    href='/icons/touch-icon-ipad-retina.png'
                />
                
                <link rel='manifest' href='/manifest.json' />
                <link
                    rel='mask-icon'
                    href='/icons/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Anapanasati Meditation' />
                <meta
                    property='og:description'
                    content='Best Anapanasati Meditation'
                />
                <meta property='og:site_name' content='Anapanasati Meditation' />
                <meta property='og:url' content='https://yourdomain.com' />
                <meta
                    property='og:image'
                    content='https://yourdomain.com/icons/apple-touch-icon.png'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
