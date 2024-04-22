import { setItem } from "../services/localStorage";


export const get = async (url: string, options: RequestInit  = {}) => {
    try {
        
        options.headers={
            ...options.headers,
            "accept": 'application/json',
            // 'Content-Type': 'application/json;charset=utf-8',
    
        }
        console.log({options});
        
        const response = await fetch(url, options)
        if (!response.ok) {
            return {
                isSuccess: false
            }

        }
        return await response.json()
        setItem("videos", response.json())

    } catch (error) {
        return {
            isSuccess: false,
            error
        }
    }


}

export const post = async (url: string, data : unknown, options: RequestInit  = {}) => {

    console.log(url)
    try {
        console.log({ data });
        options.method = "POST";
        options.body = JSON.stringify(data)
        options.headers = {
            ...options.headers,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const response = await fetch(url, options)
        if (!response.ok) {
            const error = await response.json()
            return {
                ...error,
                isSuccess: false,
            }

        }
        return await response.json()

    } catch (error) {
        return {
            isSuccess: false,
            error
        }
    }


}
export const remove = async (url: string, options:RequestInit ={}) => {

    console.log(url)
    try {
        options.method = "DELETE";

        options.headers = {
            ...options.headers,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const response = await fetch(url, options)
        if (!response.ok) {
            const error = await response.json()
            return {
                ...error,
                isSuccess: false,
            }

        }
        return await response.json()

    } catch (error) {
        return {
            isSuccess: false,
            error
        }
    }


}
export const put = async (url: string, data: unknown, options: RequestInit = {}) => {

    console.log(url)
    try {
        console.log({ data });
        options.method = "PUT";
        options.body = JSON.stringify(data)
        options.headers = {
            ...options.headers,
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        const response = await fetch(url, options)
        if (!response.ok) {
            const error = await response.json()
            return {
                ...error,
                isSuccess: false,
            }

        }
        return await response.json()

    } catch (error) {
        return {
            isSuccess: false,
            error
        }
    }


}
