import Footer from './footer'
import layoutStyles from '../styles/layout.module.scss'
import Head from 'next/head'
import Header from './header'
import { StrictMode } from 'react'

import 'cirrus-ui';

export default function Layout({ children }) {
    return (
        <StrictMode>
            <Head>
                <title>NFT Showcase</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {/* <Header /> */}
            <main>
                {children}
            </main>
            <Footer />
        </StrictMode>
    )
}
