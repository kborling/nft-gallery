export async function loadCollection() {
    const res = await fetch(`${process.env.HOST}/api/collection`)
    const data = await res.json()
    return data
}
