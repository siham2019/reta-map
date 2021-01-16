import './App.css';
import { useEffect } from "react";
import { Choose } from "./Choose";

export function Map(props) {

  useEffect(() => {
    window.L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers:   window.L.mapquest.tileLayer('map'),
      zoom: 10
    });
      return "fff";
       /* axios.get("http://localhost:8000/").then((res)=>{
         res.data.map((e)=>{
           
         })
        }
      ).catch(err=>console.log(err)) 
          axios.post("http://localhost:8000/",{id:id,adress:adress}).catch(err=>console.log(err)) 

      */

  
    

  }, [])

  return (
    <div>
         <Choose/>
        <div className=" container d-flex justify-content-center">
            <div id="map" className=" col-6"></div> 
              <div className="text-center col-6 mt-2">
                
                 <div className="bg-light ">
                 {props.children}
                 </div>
                 
               
           </div>
         
         </div>
      
     
       
    </div>
  );
}


