import session from "./session.js"

const API_ROOT = process.env.API_ROOT

export async function api(url, data = null, method = null) {

    try {
        let response;

        if (data) {
            response = await fetch(API_ROOT + url, {
                method: method || "POST",
                cache: "no-cache",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
        } else {
            response = await fetch(API_ROOT + url)
        }




        // Check if the response is ok
        if (!response.ok) {
            throw await response.json();
        }
        return response.json();
    } catch (error) {
        session.Error(error)
    }
}
