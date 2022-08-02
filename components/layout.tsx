import Footer from './footer'
import Head from 'next/head'
import {Component, StrictMode} from 'react'

import 'cirrus-ui';

export default class Layout extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <StrictMode>
                <Head>
                    <title>NFT Showcase</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                {/* <Header /> */}
                <main>
                    {children}
                </main>
                <Footer/>
            </StrictMode>
        )
    }
}
