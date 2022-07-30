export async function loadCollection() {
    // Call an external API endpoint to get posts
    // TODO: Update URL
    const res = await fetch('http://localhost:3000/api/collection')
    const data = await res.json()

    return data
}