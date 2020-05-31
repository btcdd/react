import React from 'react';
import styles from '../css/Home.css';

import queryString from 'query-string';

export default class Home extends React.Component {
   constructor(){
      super(...arguments);
   }
   render(){
      const query = queryString.parse(location.search);
      console.log(query);
            
      return (
         <div className={styles.Clock}>
             <p>홈화면</p>
            <p>{location.search}</p><br/>
            <p>{query.email}</p><br/>
            <p>{query.no}</p>
         </div>
      );
   }


 }
