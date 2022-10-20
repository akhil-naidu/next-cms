import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';

// I'm disabling preflight in tailwindcss rather than using emotionCache

/*
import { MantineProvider, createEmotionCache } from '@mantine/core';

const myCache = createEmotionCache({
  key: 'mantine',
  prepend: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider emotionCache={myCache}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
*/

const MyApp = ({ Component, pageProps }) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

/*
Only uncomment this method if you have blocking data requirements for
every single page in your application. This disables the ability to
perform automatic static optimization, causing every page in your app to
be server-side rendered.

import App from 'next/app'
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

*/

export default MyApp;
