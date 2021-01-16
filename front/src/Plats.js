import { Plat } from "./Plat";
import { ModelCard } from "./ModelCard";
import axios from "axios";
import { useState,useEffect } from "react";
export function Plats(props){
const [pat, setpat] = useState([])

useEffect(() => {

      axios.get(" http://localhost:8000/plat/"+props.match.params.id)
      .then(res=>{
          setpat(res.data)
      }).catch(err=> console.log(err))

})
return (
       <div>
           <div className="bg-light  container p-3 mt-5">
           <a href="/eat" className="text-left"><i className="fa fa-long-arrow-left"></i> return back to map</a>

              <h2 className=" text-center">Menu </h2>
              <div className="row  mx-auto text-center">
                  {
                      pat.length>0?
                      pat.map((e,i)=>{
                          return   < ><Plat  image={e.image} name={e.name} id={"#"+i}/>
                          <ModelCard  image={e.image} text={e.description}
                          namep={e.name}
                          idp={e._id}
                          ar={e.adressres}
                          price={e.price+" DA"} id={i}/></>
                      })
                      :""
                  }
                 
                 
                 
                 </div>
            
        </div>

       </div>
       )


}