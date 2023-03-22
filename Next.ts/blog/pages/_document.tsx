import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   render() {
      return (
         <Html lang="pl">
            <Head>
               <meta charSet="utf-8" />
               <link rel="icon" href="/favicon.ico" />
               <link
                  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
                  rel="stylesheet"
               />
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
