import React,{useState,userEffect, Fragment, useEffect} from 'react';

import Container from './Container'
import styles from './css/CodeTree.css';

import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';


import { signIn } from './authplay/auth';

import AuthRoute from './authplay/AuthRoute';
import LoginForm from './authplay/LoginForm';
import ErrorPage from './authplay/ErrorPage';
import Home from './Home';

function CodeTree({history}){
   const [user, setUser] = useState(null);
// ===================================================
   const [userEmail,setUserEmail] = useState(null);
   const pathAccess = (resp) => {
      setUserEmail(signIn(resp))
   }
   const authenticatedHomeURL = userEmail;
   
 // ===================================================
   const authenticated = user;
   
   const login = (resp) => {
      setUser(signIn(resp))
   }
   useEffect( () => {
      console.log("authenticatedHomeURL>>>>",authenticatedHomeURL);
      // console.log("sessionStorage>>>",sessionStorage.getItem("authenticated"));
   });


   return (
      <div className={styles.CodeTree}>
     
         <Switch>  
         <Route
            path="/"
            exact
            render = {props =>  
            authenticatedHomeURL ? <Home {...props}/>
               :
               (
               <ErrorPage authenticated={authenticatedHomeURL}
                  pathAccess = {pathAccess} {...props}/>)}
               />                 
            <AuthRoute 
                  authenticated={sessionStorage.getItem("authenticated")}
                  path="/codingtest"                
                  render={props => <Container {...props}/>}
               />             
            <Route
               path="/login"
               render={props => (
                  <LoginForm authenticated={authenticated} 
                     login={login} {...props} />
                  )}
               />
               <Route component={ErrorPage} />
         </Switch>
      </div>
   );
}
export default CodeTree;
