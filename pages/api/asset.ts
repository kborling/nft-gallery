// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Based on https://docs.opensea.io/reference/asset-object
type AssetQuery = {
    owner: string,
    token_ids: string,
    limit: number,
    cursor: string,
    include_orders: string
}

type Assets = {
    assets: Asset[],
    next: string,
    previous: string
}

type Asset = {
    token_id: string,
    image_url: string,
    background_color: string,
    name: string,
    external_link: string,
    assert_contract: {},
    owner: {},
    traits: Trait[],
    last_sale?: string
}

type Trait = {
    trait_type: string,
    value: string | number,
    display_type: number | Date, // options are number, boost_percentage, boost_number, and date
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Asset>
) {
    if (req.method) {
        if (req.method === 'GET') {
            const options = { method: 'GET' }
            const url = 'https://api.opensea.io/api/v1/assets?order_direction=desc&limit=20&include_orders=false'

            // TODO: Update URL
            fetch(url, options)
                .then((response: Response) => {
                    res.status(response.status)

                    if (response.ok)
                        response.json().then((data: Asset) => res.json(data))
                            .catch(err => console.log(err))
                })
                .catch(err => console.error(err))

        }
    }
}
