import { apiUrlBase } from "../environnement/environnement";
import { get, post, put, remove } from "./helpers"



export const getData = async (entityName : string)=>{
    const url = apiUrlBase + entityName
    console.log(url);
    
   const datas = await get(url)
   
   return datas
  
   
}

export const getDataByPage = async (entityName : string, page = 1, limit=5)=>{
    const url = apiUrlBase + entityName +"/by/page" + "?pageNumber=" + page + "&pageLimit="+limit
   const datas = await get(url)
   return datas
  
   
}

export const getDatasBySlug = async (entityName: string, slug: string) =>{
    const url = apiUrlBase + entityName+"/by/slug/" + slug
    const datas = await get(url)
    return datas
}
export const searchDatas = async (entityName : string, query:string, page = 1, limit= 8)=>{
    const url = apiUrlBase + entityName + "/search?" + query + "&pageNumber=" + page + "&pageLimit="+limit
   const datas = await get(url)
   return datas
  
   
}

// export const signup = async (user:User)=>{
//     const url = apiUrlBase  +"user/signup"
//     const datas = await post(url,user)
//    return datas
    

// }

export const addData = async (entityName : string , data:unknown)=>{
    const url = apiUrlBase  + entityName
    const datas = await post(url,data)
   return datas
    

}
export const updateData = async (entityName : string , id : string,  data:unknown)=>{
    const url = apiUrlBase  + entityName + "/" + id
    const datas = await put(url,data)
   return datas
    

}
export const deleteData = async (entityName : string , id : string, )=>{
    const url = apiUrlBase  + entityName + "/" + id
    const datas = await remove(url)
   return datas
    

}

// export const signin = async (user:User)=>{
//     const url = apiUrlBase  +"user/signin"
//     const datas = await post(url,user)
//     if (datas.isSuccess) {
//         //auth success
//         setItem("auth", {token:datas.token, userId :datas.userId})
//         console.log(datas);
        
        
//     }
//    return datas
    

// }