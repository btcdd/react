import React from 'react';

import styles from './css/Home.css';
import queryString from 'query-string';
import axios from 'axios';

import MyStorage from './MyStorage';

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
         saveList : null
      }   
      
   }
   render(){
      console.log("userEmail>>>>",this.state.userEmail);
      return (
         <div className={styles['Home']}>
            <p>홈화면</p>
            <MyStorage saveList={this.state.saveList}/>    
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
