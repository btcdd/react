import React,{useState,userEffect, Fragment, useEffect} from 'react';

import Container from './Container'
import styles from './css/CodeTree.css';

import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';


import { signIn } from './authplay/auth';

import AuthRoute from './authplay/AuthRoute';
import LoginForm from './authplay/LoginForm';



function CodeTree(){
   const [user, setUser] = useState(null);
   const authenticated = user;

   const login = (resp) => {
      setUser(signIn(resp))
   }
   useEffect( () => {
      console.log(user);
      console.log("authenticated>>>",authenticated);
   });


   return (
      <div className={styles.CodeTree}>
 
         <Switch>
            <Route
               path="/login"
               render={props => (
                  <LoginForm authenticated={authenticated} 
                     login={login} {...props} />
                  )}
               />
            <AuthRoute 
               authenticated={authenticated}
               path="/"
               render={props => <Container  user={user}
               {...props}/>}
            />
         </Switch>
      </div>
   );
}
export default CodeTree;

 

