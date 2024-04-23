import { setItem } from "../services/localStorage";


export const get = async (url: string, options: RequestInit  = {}) => {
    try {
        
        options.headers={
            ...options.headers,
            "accept": 'application/json',
            // 'Content-Type': 'application/json;charset=utf-8',
            "authorization" : process.env.AUTHORIZATION
    
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

 const names = ["", "la cas del parpel", "pere pauvre", "pere riche", "coeur brise", "vendeuse de sexe", "la raison de vivre","vivre sans vivre" , "l'amour au sens propre", "l'intelligence artificielle et les developpeur web" , "un Genie " , "la concurence" , "la philosophie de chacun", "l'amour du prochain" , "la famille", "l'amitier a 15f " , "mission impossible" , "prison Break " ,  "underground", "jonh Cena" , "start-up" , "kim-sha-sha" , "village de Donjin", "wakiki" , "le ciel bleu", "genie sur la toque" , "social media" , "steve Jobs", "Mark Zuckerberg", "Elon Musk", "Bills Gate et Isidore OGOULODO","iata", "voyages en famille" , "l'amour de ma vie" , "Mon Ame Soeur", "vangeance", "Entrepreuneurs" , "Mari d'autruis", "femme de menage", "la ville natale" , "campagne" , "les realites du bled"]
export const generateData = ()=>{
	 let data = []
	 for (let i = 1 ; i <= 40 ; i ++){
		 const donnee = {
			 id: i,
			 imageUrl : `src/assets/images/${i}.jpeg`,
			 site :" youtube",
			 chaine : "filmBox",
			 title : names[i]
		 }
		 data.push(donnee)
	
	 }
	 console.log({data})
	 return data
 }
