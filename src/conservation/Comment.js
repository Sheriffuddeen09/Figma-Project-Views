import moment from "moment/moment";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import Posts from "./Posts"
import { getQuery, getAddMessage, getDeleteMessage } from "../api/axios";
const Comment = () =>{
    const [newTodo, setNewTodo] = useState('')
    const queryClient = useQueryClient()
    const{
        isLoading,
        error,
        isError,
        data: querys,
    } = useQuery('/querys', getQuery, {
        
    })

    const addMutation = useMutation(getAddMessage, {
        Selection: () =>{
            queryClient.invalidateQueries('querys')
        }
    })
    const deleteMutation = useMutation(getDeleteMessage, {
        Selection: () =>{
            queryClient.invalidateQueries('querys')
        }
    })

    const handleSubmit =(e) =>{
        const date = moment().format('h:mm a')
        e.preventDefault()
        setNewTodo('')
        addMutation.mutate({userId: 1, title: newTodo, date})
    }
    let content

    if (isLoading) return <p>loading.....</p>
    else if (isError) return <p>{error.message}</p>
    
    else{
    content = querys.map((todo) =>{
        return <Posts todo={todo} key={todo.id} 
        deleteMutation={deleteMutation}
        />
    })
}
    const Input = (
        <form onSubmit={handleSubmit}>
    <p className='emoj'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconxi'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

</p>
        <p className='emo'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconx'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
</p>
            <input 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value) }
            placeholder= 'New Todos'
            id="querys"
            className="input"
            type="text"
            />
    <button type='button' className='butt'>Send<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconx'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg></button>
</form>
    )
    return(
        <div>
        {content}
        {Input}
        </div>
    )
}
export default Comment