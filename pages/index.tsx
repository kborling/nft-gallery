import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cardStyles from '../styles/card.module.css'
import layoutStyles from '../styles/layout.module.css'
import {loadCollection} from "../lib/load-collection";
import {Collection} from "./api/collection";
import Link from "next/link";
import {Component} from "react";

class Home extends Component<{ collectionData: any }> {
  render() {
    let {collectionData} = this.props;

    return (
        <div className={layoutStyles.container}>
          <Head>
            <title>Digital Art Gallery</title>
            <meta name="description" content="NFT Gallery demo"/>
            <link rel="icon" href="/favicon.ico"/>
          </Head>

          <main className={layoutStyles.main}>
            <h1 className={styles.title}>
              Digital Art Search
            </h1>

            <p className={styles.description}>
              Find the perfect piece of art!
            </p>


            <div className={layoutStyles.grid}>
                {collectionData.collections.map((collection: Collection) => {
                    if (collection.image_url) {
                    return (
                        <div className={cardStyles.card}>
                    <Link href={`${collection.slug}`} key={collection.slug}>
                        <div className="front">
                            <div className="image">
                                <Image
                                    src={collection.image_url ?? '/vercel.svg'}
                                    alt="nft"
                                    title="nft"
                                    height={400}
                                    width={400}
                                    layout="responsive"
                                >
                                </Image>
                                <div className="overlay"><i className="fas fa-eye"></i></div>
                            </div>
                            {/*<div className="content">*/}
                            {/*    <h2>{collection.name}</h2>*/}
                            {/*    <p>{collection.description}</p>*/}
                            {/*</div>*/}
                            {/*<div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>*/}
                        </div>
                    </Link>
                        </div>
                )}})}
            </div>
          </main>

          <footer className={layoutStyles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
            </a>
          </footer>
        </div>
    )
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const collectionData = await loadCollection()
  return {
    props: {
      collectionData
    }
  }
}

export default Home

