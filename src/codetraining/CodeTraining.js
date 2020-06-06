import React from 'react';

import styles from './codetraining_css/CodeTraining.css';

import queryString from 'query-string';

export default class CodeTraining extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      const query = queryString.parse(location.search);
      console.log(query);

   }



   render(){

      return (
         <div className={styles['CodeTraining']}>
            코드 트레이닝 페이지

         </div>
         

      );
   }



 }
