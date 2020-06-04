import React from 'react';

import styles from './css/Home.css';

export default class Home extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      

   }
   render(){
      return (
         <div className={styles['Home']}>
            <p>홈화면</p>
         </div>
         

      );
   }

   componentDidMount(){ 

      
   }

 }














// import React, { useState, useEffect } from "react"
// import { Redirect, Route } from "react-router-dom"
// import styles from './css/Home.css';
// import axios from 'axios';
// import queryString from 'query-string';
// import Container from "./Container";


// const API_URL = 'http://localhost:8088/compiletest/api/codetree';
// const API_HEADERS={
//    'Content-Type' : 'application/json'
// }

// function Home({authenticated,pathAccess,location,render}){
   
//    useEffect( () => {
      
//       console.log("authenticated>>>",authenticated)
    
//       let query = queryString.parse(location.search); 
//       if(query.userEmail == ""){
//          query.userEmail = "=";
//       }
//       console.log("query>>",query.userEmail);
//       axios.post(`${API_URL}/${query.userEmail}.`,{
//          headers: API_HEADERS
//       })
//       .then(resp => resp.data.data)
//       .then(resp => pathAccess(resp))
//       .catch(err => console.error(err));
      
//    });


//    return(
//       <div>
//       <p>Home</p>
//       </div>
      
         
      
      
//    );
      
// }
// export default Home

