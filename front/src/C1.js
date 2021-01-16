import { Map } from "./map";
import { useState} from "react";
export function Eat() {
    const [loc, setloc] = useState("")
    const [m, setm] = useState();

    const search=()=>{
       if(loc!==""){
        if (m) {
            window.L.mapquest.Map.getMap("map").removeLayer(m)
          }
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

            window.L.mapquest.textMarker([35.444404, 6.176745],{type:"circle"  ,text:"fafo",
            icon: {
              primaryColor: '#ff0000',
              secondaryColor:'#ff0000',
              size: 'sm'
            }})
            .addTo( window.L.mapquest.Map.getMap("map")).bindPopup('<a href="/#">view menu</a>')

     



          });
       }  
    }
    return(
        <div style={{backgroundImage:"url('./simple-guide.jpg')"}}><Map>
            <h3 className=" pt-3 ">Discover delicious eats</h3>
            <p>Order delivery from restaurants you love.</p>


            <form className=" p-3 ">
                  <div className="input-group mb-3">

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
            
            </Map></div>
    );
}