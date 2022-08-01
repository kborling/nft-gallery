import Footer from './footer'
import layoutStyles from '../styles/layout.module.scss'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Digital Art Gallery</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={layoutStyles.container}>
                <Header />
                <main className={layoutStyles.main}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
