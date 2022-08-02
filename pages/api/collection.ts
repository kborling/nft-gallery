// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Based on https://docs.opensea.io/reference/collection-model
export type CollectionQuery = {
  asset_owner?: string,
  offset: number,
  limit: number
}

export type Collection = {
  name: string,
  external_link: string,
  description: string,
  slug: string,
  image_url: string,
  featured_image_url: string,
  large_image_url: string,
  banner_image_url: string,
  dev_seller_fee_basis_points: string,
  safelist_request_status: string,
  payout_address: string,
  primary_asset_contracts: string[],
  traits: {},
  payment_tokens: string,
  editors: string,
  stats: {},
  hidden: boolean,
  is_nsfw: boolean,
  created_date: Date
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Collection>
) {
  if (req.method) {
    if (req.method === 'GET') {
      const options = {method: 'GET', headers: {Accept: 'application/json'}};
      const url = 'https://api.opensea.io/api/v1/collections?offset=0&limit=100'
      
      fetch(url, options)
        .then((response: Response) => {
          res.status(response.status)

          if (response.ok)
            response.json().then((data) => res.json(data))
              .catch(err => console.log(err))
        })
        .catch(err => console.error(err))

    }
  }
}
