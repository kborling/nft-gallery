import Link from 'next/link'
import layoutStyles from '../styles/layout.module.scss'

export default function Footer() {
    return (
        <footer className={layoutStyles.footer}>
            <span>
                Created by <Link href="https://github.com/kborling" rel='nofollow'>
                    Kevin Borling</Link>
            </span>
        </footer>
    )
}
