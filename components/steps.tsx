import Image from 'next/image'
import Link from 'next/link'
import doge from '../public/doge-computer.png'
import future from '../public/future_transparent.png'
import infrastructure from '../public/infrastructure_transparent.png'

export default function Steps() {
    return (
        <section id="steps" className="section">
            <div className="content">
                <div className="row u-flex u-items-center">
                    <div className="col-6">
                        <figure>
                            <Image
                                src={future}
                                layout="responsive"
                            ></Image>
                            <figcaption><i>Transparent Future Illustration by
                                <Link
                                    href="https://cargocollective.com/willtempest"
                                > William Tempest</Link>
                            </i></figcaption>
                        </figure>
                    </div>
                    <div className="col-6">
                        <div className="left-content">
                            <span className="tag tag--link text-light">Step 1</span>
                            <h2>Create and Deploy NFT</h2>
                            <p>Creating an NFT is simple! The official guide provided by the Ethereum communitity walks through the entire process of:</p>
                            <ul>
                                <li>Connecting to Ethereum Network</li>
                                <li>Setting up an Account with Alchemy to create the app</li>
                                <li>Using MetaMask as a wallet provider</li>
                                <li>Adding test ETH via a faucet</li>
                                <li>Setting up local development environment</li>
                                <li>Writing a Smart Contract (ERC-721)</li>
                                <li>Connecting MetaMask and Alchemy to local project</li>
                                <li>Deploying contract to the Ethereum chain</li>
                            </ul>
                            <Link href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
                                target="_blank">
                                <button className="btn-link btn--sm">
                                    Follow Guide
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row u-flex u-items-center">
                    <div className="col-6">
                        <figure>
                            <Image
                                src={doge}
                                layout="responsive"
                            ></Image>
                            <figcaption><i>Doge Using Computer Illustration by
                                <Link
                                    href="https://cargocollective.com/willtempest"
                                > William Tempest</Link>
                            </i></figcaption>
                        </figure>
                    </div>
                    <div className="col-6">
                        <div className="left-content">
                            <span className="tag tag--link text-light">Step 2</span>
                            <h2>List NFT on OpenSea Marketplace</h2>
                            <p>Listing with OpenSea only takes a few minutes and is</p>
                            <ul>
                                <li>Creating an OpenSea account</li>
                                <li>Setting up an NFT collection</li>
                                <li>Customizing the collection properties, levels, and stats</li>
                                <li>Setting the supply amount</li>
                            </ul>
                            <Link href="https://support.opensea.io/hc/en-us/articles/360063498313-How-do-I-create-an-NFT-"
                                target="_blank">
                                <button className="btn-link btn--sm">
                                    Follow Guide
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row u-flex u-items-center">
                    <div className="col-6">
                        <figure>
                            <Image
                                src={infrastructure}
                                layout="responsive"
                            ></Image>
                            <figcaption><i>Transparent Architecture Illustration by
                                <Link
                                    href="https://cargocollective.com/willtempest"
                                > William Tempest</Link>
                            </i></figcaption>
                        </figure>
                    </div>
                    <div className="col-6">
                        <div className="left-content">
                            <span className="tag tag--link text-light">Step 3</span>
                            <h2>View Your Listing!</h2>
                            <p>This website pulls the latest collections from OpenSea, so be sure to check back and see your listing.</p>
                            <h3>So what&apos;s next for your NFT?</h3>
                            <p>You never know if your NFT will be the next big trend. Here's some things that you can do to improve your chances of having a successful NFT.</p>
                            <ol>
                                <li>Be proud of your work and offer a unique experience.</li>
                                <li>Decide on a theme that represents you.</li>
                                <li>You can always create new collections with new ideas.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
