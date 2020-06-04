import React, { useState, useEffect } from "react"
import { Redirect, Route } from "react-router-dom"
import styles from '../css/ErrorPage.css';
import axios from 'axios';
import queryString from 'query-string';



const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

function ErrorPage({authenticated,pathAccess,location}){
   
   useEffect( () => {
      
      console.log("authenticated>>>",authenticated)
    
      let query = queryString.parse(location.search); 
      if(query.userEmail == ""){
         query.userEmail = "=";
      }
      console.log("query>>",query.userEmail);
      axios.post(`${API_URL}/${query.userEmail}.`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      .then(resp => pathAccess(resp))
      .catch(err => console.error(err));
      
   },[]);


   return(
      <div className={styles['ErrorPage']}>
         <p>오류 페이지</p>
      </div>
   );
      
}
export default ErrorPage

