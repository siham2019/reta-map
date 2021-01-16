import { Bus } from "./bus";
import { Eat } from "./eat";
import { Taxi } from "./taxi";
import { BrowserRouter,Route,Redirect } from "react-router-dom";
import { Map } from "./map";
import { Navbar } from "./Navbar";
import { Signin } from "./signin";
import { Signup } from "./signup";
import { Plats } from "./Plats";
import { Cart } from "./Cart";

const Home=()=>{
  return (
    <div >
      <Map>
        <div className="py-5"> <img src="./v.jpg" alt="moto"/>
      <h3 >Get in the driver's seat and get paid </h3>
      <p>Drive on the platform with the largest network of active riders.</p>
      <a href="/sign-up" className="btn btn-dark">register</a>
      </div>
       
      </Map>
     
    </div>
  );
}
function App() {


  return (
    <div>
        <BrowserRouter>
        <Navbar/>

        <Route path="/cart" exact component={Cart}/>
        <Route path="/plat/:id" exact component={Plats}/>
        <Route path="/sign-up" exact component={Signup}/>
        <Route path="/sign-in" exact component={Signin}/>
        <Route path="/bus" exact component={Bus}/>
        <Route path="/" exact render={()=>{
          if (localStorage.getItem("token")) {
            return <Redirect to="/profile" />
          } else {
            return <Home/>
          }
          }}/>
         <Route path="/eat" exact component={Eat}/>
         <Route path="/taxi" exact component={Taxi}/>
        
        </BrowserRouter>
     
       
    </div>
  );
}






export default App;
