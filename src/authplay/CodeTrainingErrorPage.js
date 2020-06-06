import React, { useState, useEffect } from "react"

import styles from '../css/CodeTrainingErrorPage.css';
import axios from 'axios';
import queryString from 'query-string';




const API_URL = 'http://localhost:8088/compiletest/api/codetraining/training';
const API_HEADERS={
   'Content-Type' : 'application/json'
}

function CodeTrainingErrorPage({authenticated,pathAccess,location}){
   
   useEffect( () => {
      
    let query = queryString.parse(location.search); 
      
    axios.post(`${API_URL}/${query.userEmail}/${query.problemNo}`,{
        headers: API_HEADERS
     })
     .then(resp => resp.data.data)
     .then(resp => pathAccess(resp))
     .catch(err => console.error(err));

         
   });
   return(
      
      <div className={styles['CodeTrainingErrorPage']}>
         {(authenticated === null || query===undefined || query.userEmail===undefined || query.problemNo===undefined  ) ? <p>오류 페이지</p> : <p>조금만 기다려주세요...</p>  }
      </div>
   );
      
}
export default CodeTrainingErrorPage

