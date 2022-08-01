// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Based on https://docs.opensea.io/reference/collection-model
type Event = {
    event_type: string,
    external_link: string,
    asset: string,
    asset_bundle: string,
    created_date: string,
    from_account: string,
    to_account: string,
    is_private: boolean,
    payment_token: string,
    quantity: number,
    total_price: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Event>
) {
    if (req.method) {
        if (req.method === 'GET') {
            const options = { method: 'GET' }
            // TODO: Add url
            const url = ''

            fetch(url, options)
                .then((response: Response) => {
                    res.status(response.status)

                    if (response.ok)
                        response.json().then((data: Event) => res.json(data))
                            .catch(err => console.log(err))
                })
                .catch(err => console.error(err))

        }
    }
}
