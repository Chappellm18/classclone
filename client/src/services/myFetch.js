const API_ROOT = process.env.API_ROOT

export function api(url) {
    return fetch(API_ROOT + url).then(x => x.json())
}