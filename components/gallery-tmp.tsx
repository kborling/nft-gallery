import { BaseSyntheticEvent } from 'react'
import Image from 'next/image'
import { Collection } from '../pages/api/collection'
import cardStyles from '../styles/card.module.scss'

export default function Gallery({ data }) {
    let cssProperties = {}

    if (data && data.collections)
        return (
            <section className="py-2" id="gallery">
                <div className="content">
                    <div className="row">
                        {data.collections.map((collection: Collection) => {
                            if (collection.image_url && !collection.hidden) {
                                return (
                                    <div className="col-3">
                                        <div className="card card--slide-up h-100p u-flex u-flex-column">
                                            <div className="card__container">
                                                <div className="card__image" style={{ backgroundImage: `url(${collection.image_url})` }}></div>
                                            </div>
                                            <div className="card__mobile-title">
                                                <div className="content">
                                                    <div className="tile">
                                                        <div className="tile__container">
                                                            <p className="tile__title">{collection.name}</p>
                                                            <p className="tile__subtitle">By John Doe</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__body content">
                                                <p>{collection.description}</p>
                                            </div>
                                            <div className="card__footer content">2 min. read 22 comments</div>
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
