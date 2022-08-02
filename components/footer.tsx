import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div className="divider"></div>
            <div className="content">
                <p className="pb-2">Created by <Link href="https://github.com/kborling" target="_blank">
                    Kevin Borling</Link>
                </p>
            </div>
        </footer>
    )
}
