import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/logo.png" />
          {/* Adicione outros tamanhos de favicon, se desejar */}
          <link rel="icon" href="/images/logo.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/images/logo.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="/images/logo.png" sizes="64x64" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;