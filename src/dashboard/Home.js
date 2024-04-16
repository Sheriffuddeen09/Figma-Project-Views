import logo from './images/images5.png'
import Header  from "./Header"
import Button from "./Button"
import List from "./List"
import Footer from "./Footer"
const Home = ({items, posts}) =>{

return(
<div className="dashboard">
    <div style={{
        display: 'inline-flex',
        translate: '-30px',
    }}>
    <img src={logo} alt='logo' width={40} height={40} className='im'/>
    <p style={{
        translate: '50px',
        fontWeight: 'bold'
    }}> Metrix</p>
    </div>
    <div className="dashe">
        <div className="dash">
            
        <Button />
        </div>
        <div>
        <Footer />
        </div>
    </div>
    
    <div>
        <Header/>
        <div className="das">
        <List items={items}
        posts={posts}
        />
        </div>
    </div>
</div>
)
}
export default Home