import './App.css';
import { useState } from "react";
import axios from "axios";

export function ModelCard(props) {
    
    const [quantity, setquantity] = useState(1)
    
    const addto = ()=>{
              console.log(props.namep)
        if(!localStorage.getItem("idU")){
           alert("you should login first ")
        }else{
         
            window.L.mapquest.directions().route({
                start: props.ar,
                end: localStorage.getItem("location")
              },(err,data)=>{
                 
                  axios.post("http://localhost:8000/vrequest/add",{

                    idU:localStorage.getItem("idU"),
                    namep:props.namep,
                    idp:props.idp,
                    adressres:props.ar,
                    distance: data.route.distance,
                    destination:localStorage.getItem("location"),
                    quantity:quantity,
                    pricet:parseFloat(props.price)*quantity
                })
                .then(res=> localStorage.setItem("vr","0"))
                .catch(err=> console.log(err))
              });
         
          
        
        }
    }


    const Minus=()=>{
        if(quantity>=1)
       setquantity(quantity-1)   
    

    }
    
    const Plus=()=>{
      
      setquantity(quantity+1)
    
    }

    return(
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
         <div className="modal-content">
                 <div className="modal-header">

                                <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                  </div>
            <div className="modal-body">
            <img className="card-img-top" src={props.image} alt="plat" style={{height:"30vh"}}/>

            <p className="card-text">{props.text}</p>
              </div>
            <div className="modal-footer">
                  <button type="button" className="btn p-3 v" onClick={Minus}>-</button>
                  <p>{quantity}</p>
                  <button type="button" className="btn p-3 v" onClick={Plus}>+</button>
            
                  <button type="button" className="btn btn-dark p-2 "
                   style={{width:"80%"}} onClick={addto}>
                  
                      add to cart {parseFloat(props.price)*quantity}
                  
                  </button>
           
             </div>
       </div>
   </div>
</div>
    );
}