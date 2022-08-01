import { GetServerSideProps } from 'next'
import Image from 'next/image'
import cardStyles from '../styles/card.module.scss'
import layoutStyles from '../styles/layout.module.scss'
import { loadCollection } from "../lib/load-collection";
import { Collection } from "./api/collection";
import Layout from "../components/layout"

export default function Home({ collectionData }: any): JSX.Element {
    if (collectionData && collectionData.collections)
        return (
            <Layout>
                <section className={layoutStyles.grid}>
                    {collectionData.collections.map((collection: Collection) => {
                        {/* TODO: Add nsfw filter */ }
                        if (collection.image_url && !collection.hidden) {
                            return (
                                <div className={cardStyles.card} key={collection.slug}>
                                    <div className={cardStyles.front}>
                                        <Image
                                            src={collection.image_url}
                                            alt={collection.name}
                                            height={400}
                                            width={400}
                                            layout="responsive"
                                            className={cardStyles.image}
                                        >
                                        </Image>
                                    </div>
                                    <div className={cardStyles.back}>
                                        {/* <h2 className={cardStyles.title}>{collection.name}</h2> */}
                                        {/* <p className={cardStyles.description}>{collection.description}</p> */}
                                        {/* TODO: List traits (if available) */}
                                    </div>
                                </div>
                            )
                        }
                    })}
                </section>
            </Layout>
        )
    return (<h2>There are no NFTs to display :(</h2>)
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    let collectionData = null
    try {
        collectionData = await loadCollection(query)
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
