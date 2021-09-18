export default function fetchMetro({url}) {
    return fetch(getenv(METRO_API_KEY), {
        method: 'GET'
    })
}