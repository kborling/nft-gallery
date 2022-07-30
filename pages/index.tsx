import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="NFT Marketplace demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          NFT Search
        </h1>

        <p className={styles.description}>
          Find the perfect NFT!
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <div className="front">
              <div className="image">
                <Image
                  src="https://i.ibb.co/gmkfJnh/image-equilibrium.jpg"
                  alt="nft"
                  title="nft"
                  width="400"
                  height="400"
                >
                </Image>
                <div className="overlay"><i className="fas fa-eye"></i></div>
              </div>
              <div className="content">
                <h2>Equilibrium #3429</h2>
                <h5>Our Equilibrium collection promotes balance and calm</h5>
              </div>
              <div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>
            </div>
          </a>

          <a href="#" className={styles.card}>
            <div className="front">
              <div className="image">
                <Image
                  src="https://i.ibb.co/gmkfJnh/image-equilibrium.jpg"
                  alt="nft"
                  title="nft"
                  width="400"
                  height="400"
                >
                </Image>
                <div className="overlay"><i className="fas fa-eye"></i></div>
              </div>
              <div className="content">
                <h2>Equilibrium #3429</h2>
                <h5>Our Equilibrium collection promotes balance and calm</h5>
              </div>
              <div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>
            </div>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <div className="front">
              <div className="image">
                <Image
                  src="https://i.ibb.co/gmkfJnh/image-equilibrium.jpg"
                  alt="nft"
                  title="nft"
                  width="400"
                  height="400"
                >
                </Image>
                <div className="overlay"><i className="fas fa-eye"></i></div>
              </div>
              <div className="content">
                <h2>Equilibrium #3429</h2>
                <h5>Our Equilibrium collection promotes balance and calm</h5>
              </div>
              <div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>
            </div>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <div className="front">
              <div className="image">
                <Image
                  src="https://i.ibb.co/gmkfJnh/image-equilibrium.jpg"
                  alt="nft"
                  title="nft"
                  width="400"
                  height="400"
                >
                </Image>
                <div className="overlay"><i className="fas fa-eye"></i></div>
              </div>
              <div className="content">
                <h2>Equilibrium #3429</h2>
                <h5>Our Equilibrium collection promotes balance and calm</h5>
              </div>
              <div className="wrap"><span><i className="fab fa-ethereum"> </i><span className="ic">0.041 ETH</span></span><span><i className="fas fa-clock"> </i><span className="ic">3 days left</span></span></div>
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
