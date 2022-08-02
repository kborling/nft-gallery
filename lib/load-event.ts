export async function loadEvent() {
    const res = await fetch(`${process.env.HOST}/api/event`)
    const data = await res.json()
    return data
}