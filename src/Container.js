import React,{Fragment} from 'react';
import ProblemList from './ProblemList';
import CodeWindow from './CodeWindow';
import Header from './Header';

import styles from './css/Container.css';

import axios from 'axios';

import queryString from 'query-string';

const API_URL = 'http://localhost:8088/compiletest/api/codingtest';
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
         startTime : null
         // savePath : null,
         // savePathCode : null
      }   
   }
   
   render(){
      
      return (
         <Fragment>
               <Header startTime={this.state.startTime} endTime={this.state.endTime} />
               <div className={styles['container']}>
                  <ProblemList title={this.state.title} lists={this.state.lists}/>
                  <CodeWindow lists={this.state.lists}/>
                  {/* <CodeWindow savePath={this.state.savePath} savePathCode={this.state.savePathCode}/> */}
               </div>    
         </Fragment>        
      );
   }
   componentDidMount(){ 
      axios.post(`${API_URL}/mylist/${this.state.userEmail}/${this.state.problemNo}`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      // .then(resp => console.log(resp))
      .then(resp => this.setState({
         title : resp.problemVo.title,
         lists : resp.list,
         endTime : resp.problemVo.endTime,
         startTime : resp.problemVo.startTime
         // savePath : resp.savePathVoList,
         // savePathCode : resp.codeVoList
      }))
      .catch(err => console.error(err));
   }
}