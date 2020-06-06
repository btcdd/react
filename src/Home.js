import React from 'react';

import styles from './css/Home.css';

import queryString from 'query-string';
import axios from 'axios';


import Header from './codetree/Header';
import CodeWindow from './codetree/CodeWindow';
import MyStorage from './codetree/MyStorage';

const API_URL = 'http://localhost:8088/compiletest/api/codetree/list';
const API_HEADERS={
   'Content-Type' : 'application/json'
}
export default class Home extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      const query = queryString.parse(location.search);
      
      if(query.userEmail == ""){
         query.userEmail = "=";
      }
      this.state = {
         userEmail : query.userEmail,
         saveList : null,
         savePath : null,
         savePathCode : null,
         problemNo : null,
         showInfo:false
      }   
      
   }

   handToggle(event) {
      this.setState({
         showInfo: !this.state.showInfo
      })
   }

   onNotifyProblemNoChange(problemNo){
      this.setState({
         problemNo : problemNo
      })
   }

   onNotifySaveNoChange(savePath,savePathCode){
      this.setState({
         savePath : savePath,
         savePathCode : savePathCode
      })
   }


   render(){
      return (
         <div className={styles['Home']}>
            
               <Header/>

               <button onClick={this.handToggle.bind(this)}>저장 리스트</button>
               <div className={this.state.showInfo ? styles['open'] : styles['close']}>
                  <MyStorage saveList={this.state.saveList} userEmail={this.state.userEmail} onNotifySaveNoChange={this.onNotifySaveNoChange.bind(this)}  onNotifyProblemNoChange={this.onNotifyProblemNoChange.bind(this)} />   
               </div>               
               <CodeWindow userEmail={this.state.userEmail} savePath={this.state.savePath}  savePathCode={this.state.savePathCode} problemNo={this.state.problemNo} />

         </div>
         

      );
   }

   componentDidMount(){ 
      axios.post(`${API_URL}/${this.state.userEmail}.`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      // .then(resp => console.log(resp))
      .then(resp => this.setState({
         saveList : resp.saveVoList
      }))
      .catch(err => console.error(err));        
      
   }

 }
