export async function loadAsset() {
    const res = await fetch(`${process.env.HOST}/api/asset`)
    const data = await res.json()
    return data
}
