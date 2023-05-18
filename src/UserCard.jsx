import './UserCard.css'

function UserCard (props){
    return(
        <div>
      <div className="">
         <div class="card back azul" style={{zIndex: "4"}}>
          <div className="img" style={{ backgroundImage: `${props.imagen}` }}></div>
           <div class="card-body writ text-start">
           <p className='writ text-start'>Report for</p>
             <h1>{props.nombre}</h1>
           </div>
         </div>
         <div class="card text-start morado" style={{marginTop: "-20px", }}>
           <p className='letra'>Daily</p>
           <p className='letra'>Weekly</p>
           <p className='letra'>Monthly</p>  
         </div>
         
       
       </div>
        </div>
    )
}
export default UserCard