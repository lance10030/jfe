import Document, { Html, Head, Main, NextScript } from 'next/document';
import { isDev } from 'config/index';

class AppDocument extends Document {
  render = () => (
    <Html lang='en-GB'>
      <Head>
        <meta name='keywords' content='JAZ' />
        <meta name='description' content='JAZ Network' />
        <link rel='icon' href='/favicon.png' />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());

            gtag("config", "G-YLLSZ8EZQJ");
          `
        }}>
        </script>
        {isDev && (
          <>
            <script src="https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.0/vconsole.min.js"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                // init vConsole
                var vConsole = new VConsole();
              `
            }}>
            </script>
          </>
        )}
      </Head>
      <body>
        <script type='text/javascript' src='/rem.js' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default AppDocument;
