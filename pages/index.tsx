import { GetServerSideProps } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import cardStyles from '../styles/card.module.scss'
import layoutStyles from '../styles/layout.module.scss'
import { loadCollection } from "../lib/load-collection";
import { Collection } from "./api/collection";
import Link from "next/link";
import Layout from "../components/layout"

export default function Home({collectionData}) {
    if (collectionData && collectionData.collections)
        return (
            <Layout>
                <h1 className={styles.title}>
                    Digital Art Search
                </h1>

                <p className={styles.description}>
                    Find the perfect piece of art!
                </p>

                <section className={layoutStyles.grid}>
                    {collectionData.collections.map((collection: Collection) => {
                        {/* TODO: Add nsfw filter */ }
                        if (collection.image_url && !collection.hidden) {
                            return (
                                <div className={cardStyles.card} key={collection.slug}>
                                    <Link href={`${collection.slug}`}>
                                        <figure className={cardStyles.image}>
                                            <Image
                                                src={collection.image_url}
                                                alt={collection.name}
                                                height={400}
                                                width={400}
                                                layout="responsive"
                                            >
                                            </Image>
                                            {/*<figcaption className="content">*/}
                                                {/*  <h2>{collection.name}</h2>*/}
                                                {/*  <p>{collection.description}</p>*/}
                                                {/*</figcaption>*/}
                                            {/*<div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>*/}
                                            {/*<div className="overlay"><i className="fas fa-eye"></i></div>*/}
                                        </figure>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </section>
            </Layout>
        )

}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let collectionData = null
    const page: number = query.page || 1

    try {
        collectionData = await loadCollection(page)
    }
    catch (err: any) {
        collectionData = { error: { message: err.message } }
    }
    return {
        props: {
            collectionData
        }
    }
}
