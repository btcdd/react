import React, { Fragment } from 'react';
import ProblemList from './ProblemList';
import CodeWindow from './CodeWindow';
import Header from './Header';

import styles from './css/Container.css';

import axios from 'axios';

import queryString from 'query-string';

const API_URL = 'http://localhost:8088/compiletest/api/training/mylist';
const API_HEADERS={
   'Content-Type' : 'application/json'
}
export default class Container extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      const query = queryString.parse(location.search);
      
      // console.log("location>>>>>",location);
      // console.log("props>>>>>",this.props);
      
      this.state = {
         userEmail : query.userEmail,
         problemNo : query.problemNo,
         lists : null,
         title : null,
         endTime : null,
         startTime : null,
      }   
   }
   
   render(){
      return (
         <Fragment>
               <div >
                  <Header startTime={this.state.startTime} endTime={this.state.endTime} />
               </div>
               <div className={styles['container']}>
                  <ProblemList title={this.state.title} lists={this.state.lists}/>
                  <CodeWindow />
               </div>    
         </Fragment>        
      );
   }
   componentDidMount(){ 
      axios.post(`${API_URL}/${this.state.userEmail}/${this.state.problemNo}`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      .then(resp => this.setState({
         title : resp.problemVo.title,
         lists : resp.list,
         endTime : resp.problemVo.endTime,
         startTime : resp.problemVo.startTime
      }))
      .catch(err => console.error(err));
   }
}

