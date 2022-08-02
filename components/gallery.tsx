import Image from 'next/image'
import { Collection } from '../pages/api/collection'
import cardStyles from '../styles/card.module.scss'
import {Component} from "react";

export default class Gallery extends Component<{ data: any }> {
    render() {
        let {data} = this.props;
        if (data && data.collections)
            return (
                <section className="py-2" id="gallery">
                    <div className="content">
                        <div className="grid grid-cols-1 u-gap-1 grid-cols-4-xl">
                            {data.collections.map((collection: Collection) => {
                                if (collection.image_url && !collection.hidden && !collection.is_nsfw) {
                                    return (
                                        <div className="card" key={collection.slug}>
                                            <div className="{cardStyles.front}">
                                                <div className="{cardStyles.image}">
                                                    <Image
                                                        src={collection.image_url}
                                                        alt={collection.name}
                                                        height={400}
                                                        width={400}
                                                        layout="responsive"
                                                        className={cardStyles.image}
                                                    ></Image>
                                                </div>
                                                {/* <div className="content"> */}
                                                {/* <h3 className={cardStyles.title}>{collection.name}</h3> */}
                                                {/* <p className={cardStyles.description}>{collection.description}</p> */}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </section>
            )
        return (<h2>There are no NFTs to display :(</h2>)
    }
}
