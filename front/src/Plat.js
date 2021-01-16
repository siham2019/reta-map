export function Plat(props){

  return(
        
                 <div className="card col-3 m-3" >
                     <img className="card-img-top" src={props.image} alt="plat"/>
                       <div className="card-body">
                             <h5 className="card-title">{props.name}</h5>
                                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target={props.id}>
                                                order now
                                        </button>

                      </div>
                 </div>
         

  );





}