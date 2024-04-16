import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:3500'
})

export const getTodos = async () =>{
    const response = await api.get('/todos')
    return response.data 
}
export const getPost = async (todo) =>{
    const response = await api.post('/todos', todo)
    return response.data 
}
export const getUpdate = async (todo) =>{
    const response = await api.patch(`/todos/${todo.id}`, todo)
    return response.data 
}
export const getDelete = async ({id}) =>{
    const response = await api.delete(`/todos/${id}`, id)
    return response.data 
}