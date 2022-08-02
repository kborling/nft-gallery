import { loadCollection } from "../lib/load-collection";
import Layout from "../components/layout"
import Gallery from '../components/gallery';
import Hero from "../components/hero";
import Steps from "../components/steps";
import { Collection } from "./api/collection";
import {Component} from "react";



export default class Home extends Component<{ data: any }> {
    render(): JSX.Element {
        let {data} = this.props;
        return (
            <Layout>
                <Hero/>
                <Steps/>
                <Gallery data={data}/>
            </Layout>
        )
    }
}

export const getServerSideProps = async () => {

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
};
