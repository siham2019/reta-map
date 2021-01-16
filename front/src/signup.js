import axios from "axios"
import { Formik, Field, Form } from 'formik';
import {Redirect  } from "react-router-dom";

export function Signup() {
 /*  axios.post(" http://localhost:8000/sign-up",{...values})
  .then(res=> console.log(res))
  .catch(err=> console.log(err)) */
const submit=(values)=>{
  axios.post(" http://localhost:8000/sign-up",{...values})
  .then(res=> console.log(res))
  .catch(err=> console.log(err))
}
  return(
        <div>
              {
                   localStorage.getItem("token") ?  <Redirect to="/profile"/>: 
          <Formik
              initialValues={{
                fullName: '',
                password: '',
                mobileNumber:'',
                type:'',
                email: '',
               }}
               onSubmit={submit}
               >

          <div className="mx-auto col-6 bg-light mt-4 mb-5">
            <h3 className="text-center pt-2">SIGN UP</h3>
            <Form className="  p-4" >
               <div className="form-group">
                     <label htmlFor="fullName">full name </label>
                     <Field type="text"  className="form-control" name="fullName"

                           
                     
                     placeholder="Enter email" id="fullName"/>
               </div>
               <div className="form-group">
                     <label htmlFor="email">Email </label>
                     <Field type="email"  className="form-control" name="email"
                     
                     

                   placeholder="Enter email" id="email"/>
               </div>
               <div className="form-group">
                     <label htmlFor="mobile">mobile number </label>
                     <Field type="text"  className="form-control" name="mobileNumber"
                     
                
            
                     
                     placeholder="Enter mobile number" id="mobile"/>
               </div>
               <div  className="form-group">
                   <label htmlFor="pwd">Password:</label>
                   <Field type="password"  className="form-control" name="password"
                   
                  
          
                   
                   placeholder="Enter password" id="pwd"/>
                </div>
                <div  className="form-group">
                   <label htmlFor="pwd1">confirm Password:</label>
                   <Field type="password"  className="form-control" name="password"  placeholder="Enter password" id="pwd1"/>
                </div>
                <div  className="form-inline form-check m-3">
                        <label>
                          <Field type="radio" name="type" value="driver" />
                            driver
                         </label>
            
                         <label>
                          <Field type="radio" name="type" value="rider" />
                            rider
                         </label>
                   
              
                </div>
         
               <button type="submit"  className="btn btn-dark container">Submit</button>
               <p>you  have account  <a href="/sign-in">sign in</a></p>
          </Form>
        </div>












            </Formik>}
      





        </div>
    );
}