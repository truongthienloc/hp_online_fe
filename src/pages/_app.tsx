import '~/styles/globals.scss';
import '~/styles/modal.scss';
import '~/styles/style.scss'
import '~/styles/beforeafter.scss'
import 'react-toastify/dist/ReactToastify.css';
import type { AppPropsWithLayout } from '~/types';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Head from 'next/head';
function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

    return getLayout(
        <div>
            <Head>
                <title>HEALTHCARE & PHARMACY ONLINE</title>
                <meta charSet="utf-8" />
                <link
                    rel="shortcut icon"
                    href="/images/Logo HPO.png"
                    type="image/x-icon"
                />
            </Head>
            <Component {...pageProps} />
        </div>,
    );
}
export default App;
