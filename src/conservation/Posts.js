const Posts = ({todo, deleteMutation}) =>{

    return(
        <div>
        <p className="con11">{todo.title} </p>
        <p className="con12">{todo.date}</p>
        <button className='delete' onClick={() => deleteMutation.mutate({id: todo.id})}>X</button>
        </div>
    )
}
export default Posts