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
      
      
      let query = queryString.parse(location.search); 
      if(query.userEmail == ""){
         query.userEmail = "=";
      }
      this.state = {
         userEmail : query.userEmail 
      }
      console.log("query>>",query);
      console.log("query.userEmail>>",query.userEmail);
      // console.log("match>>",match);
      // console.log("location>>",location);
      // console.log("history>>",history);
      // console.log("this.state.userEmail>>",this.state.userEmail);
   }
   render(){
            
      return (
         <div className={styles.Home}>
             <p>홈화면</p>
            {/* <p>{location.search}</p><br/>
      <p>{`${API_URL}/${this.state.userEmail}`}</p> */}

         </div>
      );
   }
   componentDidMount(){ 
      axios.post(`${API_URL}/${this.state.userEmail}.`,{
         headers: API_HEADERS,
         body: JSON.stringify({})
      })
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
   }

 }
