import session from "./session.js"

const API_ROOT = process.env.API_ROOT

export async function api(url) {

    try {
        const x = await fetch(API_ROOT + url);
        if (!x.ok) {
            throw await x.json();
        }
        return x.json();
    } catch (error) {
        session.Error(error)
    }


}