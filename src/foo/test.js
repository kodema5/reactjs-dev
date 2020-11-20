export default async () => {
    let res = await fetch('/api/test', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await res.json()
    alert(JSON.stringify(data))
}