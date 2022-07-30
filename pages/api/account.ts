// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Based on https://docs.opensea.io/reference/collection-model
type Account = {
    address: string,
    user: {},
    config: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Account>
) {
    if (req.method) {
        if (req.method === 'GET') {
            const options = { method: 'GET' }
            const url = ''

            // TODO: Update URL
            fetch('', options)
                .then((response: Response) => {
                    res.status(response.status)

                    if (response.ok)
                        response.json().then((data: Account) => res.json(data))
                            .catch(err => console.log(err))
                })
                .catch(err => console.error(err))
        }
    }
}
