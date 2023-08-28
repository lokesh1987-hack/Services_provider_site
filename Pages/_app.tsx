/* Import Packages */
import { NextPage } from 'next';

/* Import Components */
import Layout from '../Components/Layout'

/* Import Styles */
import "../Styles/global.css"

type MyAppProps = {
    Component: NextPage;
    pageProps: Record<string, any>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
