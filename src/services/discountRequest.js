import { URL } from '../helpers/links.js'
export const fetchGetDiscount = async (phone) => {
    try {
        const response = await fetch(`${URL}/sale/send`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(phone)
        })
        const data = await response.json()
        return data
    } catch (error) {
        return error.message
    }

}