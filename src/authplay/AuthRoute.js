
import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  useEffect(()=>{
    console.log("AuthRoute  authenticated>>>>>",authenticated);
  });
  return (
    <Route  
      {...rest}
      render={props =>
        authenticated ? ( 
          render ? render(props) : <Component {...props} /> 
        ) : ( 
          <Redirect 
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;