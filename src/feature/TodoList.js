import { useQuery, useMutation, useQueryClient } from "react-query";
import { getPost, getDelete, getTodos, getUpdate } from "../api/axios";
import { useState } from "react";

const TodoList = () =>{

    const [newTodo, setNewTodo] = useState('')
    const queryClient = useQueryClient()
    const{
        isLoading,
        error,
        isError,
        data: todos,
    } = useQuery('/todos', getTodos, {
        
    })

    const addMutation = useMutation(getPost, {
        Selection: () =>{
            queryClient.invalidateQueries('todos')
        }
    })
    const updateMutation = useMutation(getUpdate, {
        Selection: () =>{
            queryClient.invalidateQueries('todos')
        }
    })

    const deleteMutation = useMutation(getDelete, {
        Selection: () =>{
            queryClient.invalidateQueries('todos')
        }
    })

    const handleSubmit =(e) =>{

        e.preventDefault()
        setNewTodo('')
        addMutation.mutate({userId: 1, title: newTodo, completed: false})
    }
    let content

    if (isLoading) return <p>loading.....</p>
    else if (isError) return <p>{error.message}</p>
    
    else{
    content = todos.map((todo) =>{
        return (
        <div className="form">
        <span> 
            <input 
            type="checkbox"
            id="completed"
            onChange={updateMutation.mutate({...todo, completed: !todo.completed})}
            checked={todo.completed}
            />
        </span>
        <label> {todo.title} </label>
        <button className="delete" onClick={ deleteMutation.mutate({id: todo.id})}>X</button >

        </div>
        )
        })
}

    const itemsList = (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value) }
            placeholder= 'New Todos'
            id="todos"
            className="input"
            type="text"
            />
    <button type='button' className='butt'>Send<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconx'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg></button>
</form>
        </div>
    )
    return (
        <div>
        {itemsList}
        {content}
        </div>
    )
}
export default TodoList