import React,{useState,userEffect, Fragment, useEffect} from 'react';

import Container from './Container'
import styles from './css/CodeTree.css';

import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';


import { signIn } from './authplay/auth';

import AuthRoute from './authplay/AuthRoute';
import LoginForm from './authplay/LoginForm';
import FinishPage from './authplay/FinishPage';
import Home from './Home';

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

            <Route
                  path="/"
                  exact
                  component = {Home}
                  />
         <Switch>
            <AuthRoute 
                  authenticated={authenticated}
                  path="/codingtest"               
                  render={props => <Container  user={user}
                  {...props}/>}
               />             
            <Route
               path="/login"
               render={props => (
                  <LoginForm authenticated={authenticated} 
                     login={login} {...props} />
                  )}
               />
            <Route
               path="/FinishPage"
               render={
                  props => <FinishPage {...props}/>
               }
            />
         </Switch>
      </div>
   );
}
export default CodeTree;

 

