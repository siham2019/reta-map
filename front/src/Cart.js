import axios from "axios";
import { useEffect,useState } from "react";

export function Cart() {



  const [pro, setpro] = useState([])
  const [enabled, setenabled] = useState(false)

 const confirm=()=>{
     let f=pro.reduce((e,v)=>e+v.pricet,0)
   


       axios.post("http://localhost:8000/vrequest/confirm/"+localStorage.getItem("idU"),{pricet:f})
       .then(res=> {
         console.log(res) 
        localStorage.removeItem("vr")
        window.location.reload()
        setpro([])
      })
       .catch(err=> console.log(err))

    

   

 }  

 const x=(e)=>{

  console.log(e)
  
  axios.get("http://localhost:8000/vrequest/delete/"+e)
  .then(res=>{console.log(res)
  })
  .catch(err=>console.log(err))


}



 useEffect(() => {
   
  if(localStorage.getItem("vr")){
       
    axios.get("http://localhost:8000/vrequest/"+localStorage.getItem("idU"))
    .then(res=> {
      
         setpro(res.data)
        if(res.data.length>0) setenabled(true)
        else setenabled(false)

    })
    .catch(err=>console.log(err))

   }


 })


 return(
        <div className="bg-light container mt-3 text-center">
          <h3 className="mt-4">your cart</h3>
            <table className="table table-hover table-striped mt-3 " >
               <thead>
                   <tr>
                         <th scope="col">name</th>
                          <th scope="col">quantity</th>
                          <th scope="col">price</th>
                       
                   </tr>
              </thead>
  <tbody>
   
      {
      
          pro.length>0?
        pro.map((e,i)=>{
              return  <tr  key={i} >
                     <td>{e.namep}</td>
                     <td>{e.quantity}</td>
                     <td>{e.pricet}</td>
                     <td>
                       <button type="button" onClick={()=>{x(e.idp)}}>x</button>
                     </td>
                     </tr>
        

        }):<tr><td colSpan="4">there is no product added in your cart</td></tr>
      }
   
    
   
  </tbody>
</table>
        <button className="container btn btn-dark mb-5 mt-3" 
        onClick={confirm}
        disabled={!enabled}>confirm your orders</button>
        </div>
    );
}