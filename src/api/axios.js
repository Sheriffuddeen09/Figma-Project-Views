import axios from "axios";

export const api = axios.create({
    baseURL: 'http:///localhost:3500'
})

export const getPosts = async () =>{

    const res = await api.get('/todos')
    return res.data
}
export const getItems = async () =>{

    const res = await api.get('/dashboard')
    return res.data
}

export const getChat = async () =>{

    const res = await api.get('/conservation')
    return res.data
}
export const getQuery = async () =>{

    const res = await api.get('/querys')
    return res.data
}
export const getAddMessage = async (todo) =>{

    const res = await api.post('/querys', todo)
    return res.data
}
export const getDeleteMessage = async ({id}) =>{

    const res = await api.delete(`/querys/${id}`, id)
    return res.data
}