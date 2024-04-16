import OrderList from "./OrderList"

const Order = ({posts}) =>{

    return(
        <div>
            <ul className="mainer">
        {
            posts.map((post) =>(
                <OrderList key={post.id} post={post}/>
            ))
        }
       </ul>
        </div>
    )
}
export default Order