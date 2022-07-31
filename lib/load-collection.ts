export async function loadCollection(page: number) {
    // Call an external API endpoint to get posts
    // TODO: Update URL
    // const res = await fetch(`${process.env.FETCH_URL}/api/collection`)
    const res = await fetch('http://localhost:3000/api/collection')
    // console.log (`${process.env.FETCH_URL}/api/collection`)
    const data = await res.json()

    return data
}
