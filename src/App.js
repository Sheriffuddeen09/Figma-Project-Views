//import {format} from "date-fns"
import { useState } from "react"
import { useEffect } from "react"
import { getPosts,getItems, getChat } from "./api/axios"
import Home from "./dashboard/Home"
import Conservation from "./conservation/Conservation"
import { Route, Routes } from "react-router-dom"
const App = () =>{

    const [items, setItems] = useState([])
    const [posts, setPosts] = useState([])
    const [chats, setChats] = useState([])
    const [comment, setComment] = useState('')
    const [messages, setMesages] = useState(JSON.parse(localStorage.getItem('shoppinglist'))|| [])
    const [searchResults, setSearchResults] = useState([])


    const handleComment = (e) =>{
        e.preventDefault()
        const id = messages.length ? messages[messages.length -1 ].id + 1 : 1
        const items = {id, title:comment}
        const results = [...messages, items]
        setMesages(results)
        setComment('')
    }
    useEffect(() =>{

        getItems().then(json=>{
            setItems(json)
            return json
        });
        getChat().then(json=>{
            setChats(json)
            return json
        }).then(json =>{
            setSearchResults(json)
        });
        getPosts().then(json=>{
            setPosts(json)
            return json
        });

    
    }, [])
       
useEffect(() =>{

    localStorage.setItem('shoppinglist', JSON.stringify(messages))

},[messages])
    return(

        <div>
            <Routes>
            <Route path="/" element={<Home items={items} 
                    posts={posts}
            />} />
            <Route path="/chat" element={<Conservation chats={chats}
                    searchResults={searchResults}
                    handleComment={handleComment}
                    messages={messages}
                    comment={comment}
                    setComment={setComment}
                    setSearchResults={setSearchResults}
            />} />
            </Routes>
        
        </div>
    )
}
export default App