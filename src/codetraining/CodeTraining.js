import React from 'react';

import styles from './codetraining_css/CodeTraining.css';

import queryString from 'query-string';

import Header from './Header';




export default class CodeTraining extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      const query = queryString.parse(location.search);
      console.log(query);

   }



   render(){

      return (
            <div className={styles['CodeTraining']}>
               <Header />
               
               {/* <ProblemList title={this.state.title} lists={this.state.lists}/>
               <CodeWindow savePath={this.state.savePath} savePathCode={this.state.savePathCode}/> */}

            </div>
         


         

      );
   }


 }
