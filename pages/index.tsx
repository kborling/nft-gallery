import { loadCollection } from "../lib/load-collection";
import Layout from "../components/layout"
import Gallery from '../components/gallery';
import Hero from "../components/hero";
import Intro from "../components/intro";
import Steps from "../components/steps";



export default function Home({ data }) {
    return (
        <Layout>
            <Hero />
            <Steps />
            <Gallery data={data} />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    let data = null;
    try {
            data = await loadCollection();
        }
    catch (err: any) {
        data = { error: { message: err.message } };
    }
    return {
        props: {
            data
        }
    };
}
