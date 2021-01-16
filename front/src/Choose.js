import './App.css';
import { NavLink } from "react-router-dom";
export function Choose() {
    return(
        <div className=" mt-4 container">
                  <ul className="nav bg-light justify-content-center text-center">
                     <li className="nav-item ">
                         <NavLink className="nav-link " activeClassName="active" to="/eat"> <i className="fa fa-birthday-cake"></i> Resturent</NavLink>
                       </li>
                       <li className="nav-item">
                             <NavLink className="nav-link" to="/taxi">
                             <i className="fa fa-taxi"></i> Taxi</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink className="nav-link" to="/bus">
                             <i className="	fa fa-bus"></i> bus</NavLink>
                        </li>
                  </ul>
        </div>
    );
}