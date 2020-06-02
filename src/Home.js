import React from 'react';
import styles from './css/Home.css';
import axios from 'axios';
import queryString from 'query-string';


const API_URL = 'http://localhost:8088/compiletest/api/codetree';
const API_HEADERS={
   'Content-Type' : 'application/json'
}
export default class Home extends React.Component {
   constructor({match,location,history}){
      super(...arguments);
      console.log("location>>>>",location);
      console.log("match>>>>",match);
      console.log("history>>>>",history);
      console.log("props>>>>",this.props);
      
      let query = queryString.parse(location.search); 
      if(query.userEmail == ""){
         query.userEmail = "=";
      }

      this.state = {
         userEmail : query.userEmail,
         auth : false

      }
      
      console.log("query>>",query);
      console.log("query.userEmail>>",query.userEmail);
      // console.log("match>>",match);
      // console.log("location>>",location);
      // console.log("history>>",history);
      // console.log("this.state.userEmail>>",this.state.userEmail);
   }
   render(){
      // console.log("this.state.auth>>>>",this.state.auth);
      // const a = this.state.auth;
      
      return (
         <div>
            <p>홈화면</p>
         </div>
         

      );
   }

   componentDidMount(){ 
      axios.post(`${API_URL}/${this.state.userEmail}.`,{
         headers: API_HEADERS
      })
      .then(resp => resp.data.data)
      .then(resp => console.log(resp))

      .catch(err => console.error(err));
   }

 }
