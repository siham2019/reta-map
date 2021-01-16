import { Map } from "./map";
import { useState,useEffect } from "react";
export function Taxi() {
const [location, setlocation] = useState('')
const [destination, setdestination] = useState('')
const [directionsLayer, set] = useState([]);
const [m, setm] = useState();
const [enabled, setenabled] = useState(true)
  const directions=(err,data)=>{

           set([
                  window.L.mapquest.directionsLayer({
                   directionsResponse: data
                  }).addTo(window.L.mapquest.Map.getMap("map"))
              ]
              )
  }
useEffect(() => {
  if(destination==="" || location==="") setenabled(true)

}, [destination,location])
  const destinationF=()=>{
    if(directionsLayer.length!==0) 
    window.L.mapquest.Map.getMap("map").removeLayer(directionsLayer[0])
    if (m) {
      window.L.mapquest.Map.getMap("map").removeLayer(m)
    }
    if (destination!=="") {
      if (location==="") {
        window.L.mapquest.geocoding().geocode(destination,(err,data)=>{
          const l=data.results[0].locations[0].latLng
          setm(window.L.mapquest.textMarker([l.lat,l.lng],{type:"marker"})
          .addTo( window.L.mapquest.Map.getMap("map")))
          window.L.mapquest.Map.getMap("map").setView([l.lat,l.lng])
        });
  
      }else{
        window.L.mapquest.directions().route({
          start: location,
          end: destination
        },directions);
        setenabled(false)
      }
   

    }
 
  }
    return(

        <div><Map>
            
            <h3 className=" pt-3 ">Request a ride now</h3>
            


            <form className=" p-3 ">
              
              <div className="input-group mb-3">
              <input type="text" className="form-control mx-auto"
              value={location}
              onChange={(e)=>setlocation(e.target.value)}
              placeholder="Enter your current adress" />

                
             </div>
               <div className="input-group mb-3">
                  <input type="text" className="form-control mx-auto" placeholder="Enter your destination"  
                  value={destination}
                   onChange={(e)=>setdestination(e.target.value)}/>
                  
                 <div className="input-group-prepend">
  
                  <button className="input-group-text btn btn-secondary "  onClick={destinationF}  type="button">
                  <i className="fa fa-chevron-circle-right"></i></button>

                 </div>
             </div> 
 
              <div className="mt-4">
                <button type="submit"  disabled={enabled} className="btn btn-dark">request now</button>
                <button type="submit"  disabled={enabled} className="btn btn-outline-secondary ml-2">schedule later</button>
              </div>
            </form>
            
            
            
            
            
            
            
            </Map> </div>
    );
}