import ico from './images/image-3.jpeg'
const Head = () =>{

    return(
        <>
        <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: '-15px 0px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
            <div>
            <p>Conservation</p>
            </div>
            <div className='wrapper'>
            <p className='static'>Design By:</p>
            <ul className='dynamic'>
            <li><main> Odukoya Sheriffuddeen Olawale </main></li>
            </ul>
          </div>
            <div style={{
              translate: '0px',
              display: 'inline-flex'
            }}>
            <p className='div37'> Nanny's snap </p>
            <p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconse'>
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</p>
            <img src={ico} alt='icons' width={20} height={20} className='div36'/>

            </div>
            
        </div>
        <div className='hr'> </div>
        <p className='div38'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='iconsa'>
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg> &nbsp;&nbsp;/Conservation
        </p>
        </>
    )
}
export default Head
