import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isExpired,decodeToken} from "react-jwt";

import reportWebVitals from './reportWebVitals';
window.L.mapquest.key = 'sZGXAkJOUH8Jjc9utAiREGhAOBoGhSPZ';

if (localStorage.getItem("token")) {
  localStorage.setItem("idU",decodeToken(localStorage.getItem("token")).id)
   
  if(isExpired(localStorage.getItem("token"))) {
    localStorage.removeItem("token")
    localStorage.removeItem("idU")
  }

}


 ReactDOM.render(

    <App />
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
