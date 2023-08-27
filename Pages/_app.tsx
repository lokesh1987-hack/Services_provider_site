import { NextPage } from 'next';
import Layout from '../Components/Layout'
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
