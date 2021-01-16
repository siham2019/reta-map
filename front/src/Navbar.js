import axios from "axios";
import { useState,useEffect } from "react";


export function Navbar(props) {
     const [state, setstate] = useState(0)
   
     useEffect(() => {

         if (localStorage.getItem("idU")) {
           
           
             if(localStorage.getItem("vr")){
              
               axios.post("http://localhost:8000/vrequest/d",{idU:localStorage.getItem("idU")})
               .then(res=>{
   
                
                    setstate(res.data.c)
                  
               })
               .catch(err=> console.log(err))   
            }
      
        
         }
     
    
         });

   return(
     <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

             <a className="navbar-brand " href="/"><i className="fa fa-map-o"></i> Reta Map</a>
  
              <ul className="navbar-nav ml-auto">
                       
                  {
                      localStorage.getItem("token")?
                      <>
                     
                         <li className="nav-item">
                            <a className="nav-link" href="/eat"> go to map</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/profile"><i className="fa fa-user-circle-o"></i> profile</a>
                         </li>
                         <li className="nav-item ">
                             <div className="dropdown ">
                                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <i className="fa fa-bell-o"></i> notifaction
                                 </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                         <p className="dropdown-item" href="/#">your first notifaction</p>
                                   </div>
                                </div>
                         </li>
                         
                         <li className="nav-item">
                            <button className="btn btn-secondary mt-1" 
                             onClick={()=>{
                                 localStorage.removeItem("token")
                                 localStorage.removeItem("idU")
                                window.location.reload()
                             }}>
                                <i className="fa fa-sign-out"></i> sign out</button>
                         </li>
                      </>
                      :<>
                           <li className="nav-item">
                               <a className="nav-link" href="/sign-up"><i className="fa fa-user-plus"></i> sign up</a>
                          </li>
                           <li className="nav-item">
                             <a className="nav-link" href="/sign-in"><i className="fa fa-user-o"></i> sign in</a>
                           </li>
                        </>
                  

                  }
                         <li className="nav-item">
                            {
                                localStorage.getItem("idU")?
                                <a className="nav-link ml-3" href="/cart" style={{backgroundColor:"purple"}}>
                                <span className="badge badge-danger">{state}</span></a>
                                 :
                                 "" 
                            }
                            
                         </li>
               
              </ul>
         </nav>




     </div>
    );
}