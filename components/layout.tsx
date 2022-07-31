import Header from './header'
import Footer from './footer'
import layoutStyles from '../styles/layout.module.scss'

export default function Layout({ children }) {
    return (
        <>
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
