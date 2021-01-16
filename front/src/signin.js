import axios from "axios"
import { Formik, Field, Form } from 'formik';
import {Redirect} from "react-router-dom";


export function Signin(props) {

    const login=(values)=>{
        axios.post(" http://localhost:8000/sign-in",{...values})
        .then((res)=>{
            localStorage.setItem("token",res.data)
            props.history.push("/profile")
            window.location.reload()
        } )
        .catch(err=> console.log(err))
      }

    return(
        <div>
      {
        localStorage.getItem("token") ?  <Redirect to="/profile"/>:  <div className="mx-auto col-6 bg-light mt-5">
          <h3 className="text-center pt-2">SIGN IN</h3>
        <Formik initialValues={
            {
                email:'',
                password:''
            }
        }
        onSubmit={login}
        >
          <Form className="  p-4">
             <div className="form-group">
                   <label htmlFor="email">Email address or mobile number:</label>
                   <Field type="text"  className="form-control" placeholder="Enter email" id="email" name="email"/>
             </div>
             <div  className="form-group">
                 <label htmlFor="pwd">Password:</label>
                 <Field type="password"  className="form-control" placeholder="Enter password" name="password"   id="pwd"/>
              </div>
          
            
             <button type="submit"  className="btn btn-dark container">Submit</button>
             <p>you don't have account  <a href="/sign-up">sign up</a></p>
         </Form>

       </Formik>
       
      </div>
      }</div>
    );
}