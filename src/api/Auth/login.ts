import { API_URL } from "../common"

export const login = async (email: string, password: string) => {
    return await fetch(API_URL + '/login', {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json());
}