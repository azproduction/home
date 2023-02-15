import {Html, Head, Main, NextScript} from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Mikhail Davydov &mdash; Fullstack TypeScript/Node.js developer</title>
                <meta name='format-detection' content='telephone=no' />
                <meta name='description' content='Mikhail Davydov &mdash; Fullstack TypeScript/Node.js developer' />
                <meta name='keywords' content='mikhail davydov, developer, javascript, typescriot, react, nodejs' />
                <meta property='og:title' content='Mikhail Davydov' />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://azproduction.me/' />
                <meta
                    property='og:image'
                    content='https://www.gravatar.com/avatar/3298d6e26223d78fc523fa98a86c8ffc?s=300&r=g'
                />
                <meta property='og:image:type' content='image/jpeg' />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
                <meta property='og:image:alt' content='Mikhail Davydov' />
                <meta property='og:description' content='Fullstack JavaScript/TypeScript developer based in Berlin' />
                <Script src='https://www.googletagmanager.com/gtag/js?id=UA-68597572-2' strategy='afterInteractive' />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`window.dataLayer = window.dataLayer || [];function gtag(){window.dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-68597572-2');`}
                </Script>
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Rubik%3A300%2C300i%2C400%2C400i%2C500%2C500i%2C600%2C600i%2C700%2C700i%2C800%2C800i%2C900%2C900i%7CSorts+Mill+Goudy&#038;display=swap'
                    type='text/css'
                    media='all'
                    crossOrigin='anonymous'
                />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&#038;display=auto'
                    type='text/css'
                    media='all'
                    crossOrigin='anonymous'
                />
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
                    type='text/css'
                    media='all'
                    crossOrigin='anonymous'
                />
                <link
                    rel='stylesheet'
                    href='assets/css/global.css'
                    type='text/css'
                    media='all'
                    crossOrigin='anonymous'
                />
                <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
