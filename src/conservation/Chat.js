import ChatList from "./ChatList"

const Chat = ({chats, setSearchResults, searchResults}) =>{

    const handleSubmit = (e) => e.preventDefault()

    const handleChange = (e) =>{
        if(!e.target.value) return setSearchResults(chats)

        const search = chats.filter(post => post.names.includes(e.target.value)
    || post.text.includes(e.target.value))
    
      return setSearchResults(search)
    }

    return (
    <div style={{
        backgroundColor:'white',
        padding: '10px',
        borderRadius: '10px',
        margin: '0px 0px',
        translate: '10px',
        width: '350px'
    }}>
       <div style={{
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: '-10px'
}}>
        <p>Contact</p>
        <p>36</p>
        </div>
        <form onSubmit={handleSubmit}>
        <input type='text' 
        onChange={handleChange}
        id='search'
        className="inputs"/>
        </form>
          <div className='div30'>
    <div>

        {
            searchResults.map((chat) =>(
                <ChatList key={chat.id} chat={chat}/>
            ))
        }
    </div>
</div>
</div>
    )
}
export default Chat