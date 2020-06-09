import React, { Fragment } from 'react';

import styles from './codetree_css/Home.css';

import queryString from 'query-string';
import axios from 'axios';


import Header from './Header';
import CodeWindow from './CodeWindow';
import ProblemList from './ProblemList';

const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}
let ProblemNO = null;
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
         title : null,
         totalList : null,
         lists : null,
         showInfo:false
      }   
      
   }
   
   onNotifyProblemNoChange(problemNo){
      ProblemNO = problemNo;
      this.setState({
         problemNo : problemNo
      });
   }

   onNotifySaveNoChange(savePath,savePathCode){
      this.setState({
         savePath : savePath,
         savePathCode : savePathCode
      })
   }

   onNotifyTitleChange(title){
      this.setState({
         title : title,
         lists :this.state.totalList[ProblemNO]         
      });
   }

   render(){
      return (
         <Fragment>
            <Header/>
            <div className={styles['Home']}>      
               <ProblemList title={this.state.title} lists={this.state.lists}/>       
               <CodeWindow userEmail={this.state.userEmail} savePath={this.state.savePath}  savePathCode={this.state.savePathCode} problemNo={this.state.problemNo} saveList={this.state.saveList} onNotifyProblemNoChange={this.onNotifyProblemNoChange.bind(this) } onNotifySaveNoChange={this.onNotifySaveNoChange.bind(this) } onNotifyTitleChange={this.onNotifyTitleChange.bind(this) } />
            </div>
         </Fragment>

      );
   }

   componentDidMount(){ 
      axios.post(`${API_URL}/list/${this.state.userEmail}.`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      // .then(resp => console.log(resp))
      .then(resp => this.setState({
         saveList : resp.saveVoList,
         totalList : resp.subProblemList
      }))
      .catch(err => console.error(err));        
      
   }

 }
