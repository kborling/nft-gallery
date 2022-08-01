import { ParsedUrlQuery } from "querystring"

export async function loadCollection(query: ParsedUrlQuery) {

    const params = new URLSearchParams({
        limit: '200',
        offset: '0'
    })
    // TODO: Add params query params
    const res = await fetch(`${process.env.HOST}/api/collection`)

    const data = await res.json()

    return data
}
