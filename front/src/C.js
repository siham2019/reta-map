import { Map } from "./map";
import { useState} from "react";
import axios from "axios";
export function C(props) {
    const [loc, setloc] = useState("")
    const [m, setm] = useState();

    const search=()=>{
       if(loc!==""){
        if (m) {
            window.L.mapquest.Map.getMap("map").removeLayer(m)
          }

          localStorage.setItem("location",loc)

          window.L.mapquest.geocoding().geocode(loc,(err,data)=>{
            const l=data.results[0].locations[0].latLng
         

            setm(window.L.mapquest.textMarker([l.lat,l.lng],{type:"marker"  ,
            icon: {
              primaryColor: '#334433',
              secondaryColor:'#334433',
              size: 'sm'
            }})
            .addTo( window.L.mapquest.Map.getMap("map")))
            
            window.L.mapquest.Map.getMap("map").setView([35.444404, 6.176745])
             console.log(data)
            //  data.results[0].locations[0].adminArea5
            axios.post(`http://localhost:8000/${props.url}`,{city:data.results[0].locations[0].adminArea5})
            .then(res => {
              /* city: "El Marsa"
id: 12
latitude: 36.40415
longitude: 0.91665
name: "haf3"
state: "chlef" */
                         if (res.data.length===0) {
                          window.L.mapquest.Map.getMap("map").setView([l.lat,l.lng])
                            alert("Sorry, we're not there yet")
                         }else{
                              window.L.mapquest.Map.getMap("map").setView([res.data[0].latitude,res.data[0].longitude])


                              res.data.map((e)=>{
    
                                return window.L.mapquest.textMarker([e.latitude,e.longitude],{type:"circle"  ,text:e.name,
                                  icon: {
                                       primaryColor: props.color,
                                       secondaryColor:props.color,
                                       size: 'sm'
                                     }})
                               .addTo( window.L.mapquest.Map.getMap("map"))
                               .bindPopup('<a href="'+props.too+e._id+'">'+props.l+'</a>')
                                }
                    


                     )}
           



            }).catch(err=>  console.log(err))


           

     



          });
       }  
    }
    return(
        <div ><Map>
            <h3 className=" pt-3 ">{props.title}</h3>
            <p>{props.text}</p>


            <form className=" p-2 ">
                  <div className="input-group mb-2">

                     <input type="text" className="form-control mx-auto"
                     value={loc} onChange={(e)=>setloc(e.target.value)}
                     placeholder="Enter your current adress"/>
                     <div className="input-group-prepend">
                       
                        <button className="input-group-text btn btn-secondary " onClick={search} type="button">
                            <i className="fa fa-search"></i></button>
                
                      </div>
                  </div>
 
              <div className="mt-4">
         
              </div>
            </form>
            {
               localStorage.getItem("token")?"":props.children
            }
           
            </Map></div>
    );
}